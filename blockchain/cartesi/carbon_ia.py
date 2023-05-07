# Copyright 2022 Cartesi Pte. Ltd.
#
# SPDX-License-Identifier: Apache-2.0
# Licensed under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy of the
# License at http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
# CONDITIONS OF ANY KIND, either express or implied. See the License for the
# specific language governing permissions and limitations under the License.

from os import environ
import json
import traceback
import logging
import requests

from modules.AI import Predictor, AIPredictionType
from modules.utils import Utils
from modules.contracts import MintContract, RequestsRedirect

logging.basicConfig(level="DEBUG")
logger = logging.getLogger(__name__)

rollup_server = environ["ROLLUP_HTTP_SERVER_URL"]
logger.info(f"HTTP rollup_server url of CarBon: {rollup_server}")


class AdvanceStatus:
    ACCEPT = "accept"
    REJECT = "reject"


class AdvanceStates:
    @staticmethod
    def prediction(input_json):
        # Predict with the data received from the two models
        predicted_month = Predictor.predict(
            input_json["    "], AIPredictionType.MONTH)
        predicted_year = Predictor.predict(
            input_json["week_list"], AIPredictionType.YEAR)

        # Create the response json
        response_json = {
            "predicted_month": predicted_month,
            "predicted_year": predicted_year,
            "contract_address": input_json["contract_address"]
        }

        logger.info(f"Adding report with payload: {response_json}")

        # Convert response json to hex string and send it to the notice endpoint
        response_hex = Utils.str2hex(str(response_json))
        response = RequestsRedirect.send_notice(
            rollup_server, {"payload": response_hex})

        logger.info(
            f"Received notice status {response.status_code} body {response.content}")

    @staticmethod
    def mint_token(input_json):
        mint_contract = MintContract(
            input_json["contract_address"], rollup_server)

        mint_contract.run(input_json["depositor"], input_json["amount"])


def handle_advance(data):

    # Default use accept as status code before processing data
    current_status = AdvanceStatus.ACCEPT

    try:
        # Convert advance raw data to json info
        input_json = json.loads(data["payload"])
        logger.debug(f"Received advance request data: {input_json}")

        if input_json.get("type", None) == "prediction":
            AdvanceStates.prediction(input_json)
        elif input_json.get("type", None) == "mint_token":
            AdvanceStates.mint_token(input_json)
        else:
            logger.error(f"Unknown advance type")
            current_status = AdvanceStatus.REJECT

    except Exception as e:
        status = AdvanceStatus.REJECT
        msg = f"Error processing data {data}\n{traceback.format_exc()}"

        logger.error(msg)
        response = requests.post(
            rollup_server + "/report", json={"payload": Utils.str2hex(msg)})

        logger.info(
            f"Received report status {response.status_code} body {response.content}")

    return current_status


def handle_inspect(data):
    logger.info(f"Received inspect request data {data}")
    logger.info("Adding report")
    response = RequestsRedirect.send_report(
        rollup_server, {"payload": data["payload"]})

    logger.info(f"Received report status {response.status_code}")
    return AdvanceStatus.ACCEPT


handlers = {
    "advance_state": handle_advance,
    "inspect_state": handle_inspect,
}

finish = {"status": AdvanceStatus.ACCEPT}
rollup_address = None

while True:
    logger.info("Sending finish")
    response = requests.post(rollup_server + "/finish", json=finish)
    logger.info(f"Received finish status {response.status_code}")
    if response.status_code == 202:
        logger.info("No pending rollup request, trying again")
    else:
        rollup_request = response.json()
        data = rollup_request["data"]
        if "metadata" in data:
            metadata = data["metadata"]
            if metadata["epoch_index"] == 0 and metadata["input_index"] == 0:
                rollup_address = metadata["msg_sender"]
                logger.info(f"Captured rollup address: {rollup_address}")
                continue
        handler = handlers[rollup_request["request_type"]]
        finish["status"] = handler(rollup_request["data"])
