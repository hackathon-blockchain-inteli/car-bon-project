import json


class Utils:
    @staticmethod
    def hex2str(hex: str):
        """
        Decodes a hex string into a regular string
        """
        return bytes.fromhex(hex[2:]).decode("utf-8")

    @staticmethod
    def str2hex(str: str):
        """
        Encodes a string as a hex string
        """
        return "0x" + str.encode("utf-8").hex()

    @staticmethod
    def advance_data2json(data: str):
        """
        Parses input string into a json object
        """
        return json.loads(Utils.hex2str(data["payload"]))
