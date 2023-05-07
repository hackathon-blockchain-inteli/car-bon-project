from enum import Enum
from errors.AI import InvalidInputLenghtError, InvalidInputTypeError, InvalidPredictionTypeError

import month_model
import year_model


class AIPredictionType(Enum):
    MONTH = 0
    YEAR = 1


class Predictor:
    # Mapping of prediction types to models to be used
    PREDICT_TYPE_MODEL_MAP = {
        AIPredictionType.MONTH: month_model,
        AIPredictionType.YEAR: year_model
    }

    @staticmethod
    def validate(input: list):
        # Make defaults tests for input validation

        if not isinstance(input, list):
            raise InvalidInputTypeError(list, type(input))

        if len(input) != 7:
            raise InvalidInputLenghtError(7, len(input))

        for day in input:
            if not isinstance(day, int):
                raise InvalidInputTypeError(int, type(day))

    @staticmethod
    def format_prediction(prediction: float):
        # Transform prediction result of tokens to from CO2/hour format
        # Setup formatting using manual tests, better results with half of the value.
        return prediction / 2

    @staticmethod
    def predict(input: list, prediction_type: AIPredictionType):
        # Validade and generate the prediction based on the prediction type

        if prediction_type in [AIPredictionType.MONTH, AIPredictionType.YEAR]:
            Predictor.validate(input)
            predicted_value = Predictor.PREDICT_TYPE_MODEL_MAP[prediction_type].score(
                input)
            return Predictor.format_prediction(predicted_value)
        else:
            raise InvalidPredictionTypeError(
                [AIPredictionType.MONTH, AIPredictionType.YEAR], type(prediction_type))
