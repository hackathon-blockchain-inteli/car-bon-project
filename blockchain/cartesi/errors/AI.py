from .base import CartesiError


class InvalidInputLenghtError(CartesiError):
    def __init__(self, expected_lenght, received_lenght):
        self.message = f"{super().message}-> [InvalidInputLenghtError] -> Expected lenght {expected_lenght}, received lenght {received_lenght}"
        super().__init__(self.message)


class InvalidInputTypeError(CartesiError):
    def __init__(self, expected_type, received_type):
        self.message = f"{super().message}-> [InvalidInputLenghtError] -> Expected type {expected_type}, received type {received_type}"
        super().__init__(self.message)


class InvalidPredictionTypeError(CartesiError):
    def __init__(self, expected_list_type, received_type):
        self.message = f"{super().message}-> [InvalidInputLenghtError] -> Expected type {expected_list_type}, received type {received_type}"
        super().__init__(self.message)


if __name__ == "__main__":
    # Basic tests of the exceptions
    try:
        raise InvalidInputLenghtError(7, 8)
    except InvalidInputLenghtError as e:
        print(e.message)

    try:
        raise InvalidInputTypeError(list, str)
    except InvalidInputTypeError as e:
        print(e.message)
