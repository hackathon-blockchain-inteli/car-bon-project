import requests
import logging
# Currently eth_abi
# from eth_abi import encode


class Voucher:
    def __init__(self, address, payload):
        self.address = address
        self.payload = payload

    def get_json(self):
        return {
            "address": self.address,
            "payload": self.payload
        }


class RequestsRedirect:
    @staticmethod
    def send_notice(rollup_server, notice):
        return requests.post(f"{rollup_server}/notice", json=notice)

    @staticmethod
    def send_voucher(rollup_server, voucher):
        return requests.post(f"{rollup_server}/voucher", json=voucher)

    @staticmethod
    def send_report(rollup_server, report):
        return requests.post(f"{rollup_server}/report", json=report)


class MintContract:
    # Raw data: b'@\\xc1\\x0f\\x19\\xc0G\\xae}\\xfaf\\xd61+h=.\\xa3\\xdf\\xbc\\xb4\\x15\\x9e\\x96\\xb9g\\xc5\\xf4\\xb0\\xa8o(B'
    MINT_FUNCTION_TOKEN = b'\xc1\x0f\x19\xc0'

    def __init__(self, address, rollup_server):
        self.address = address
        self.rollup_server = rollup_server

    def __generate_payload(self, depositor, amount):
        # return MINT_FUNCTION_TOKEN + encode(['address', 'uint256'], [depositor, amount])
        # Not implemented yet because of eth_abi dependency issue ( Not found in pip )
        return None

    def __generate_voucher(self):
        return Voucher(self.address, f'0x{self.__generate_payload().hex()}')

    def run(self, depositor, amount):
        voucher = self.__generate_voucher(depositor, amount)
        voucher_data = voucher.get_json()

        response = RequestsRedirect.send_voucher(
            self.rollup_server, voucher_data)

        logger.info(
            f"Received voucher status {response.status_code} body {response.content}")
