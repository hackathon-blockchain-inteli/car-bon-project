import csv
import random

MIN_VALUE = 10  # min value for each day of week (10 carbon kg)
MAX_VALUE = 17  # max value for each day of week (17 carbon kg)
MAX_DATA = 100  # number of data to generate

with open('data.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    writer.writerow(
        [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
            'month_predict',
            'year_predict'
        ]
    )

    for i in range(MAX_DATA):
        writer.writerow(
            [random.randint(MIN_VALUE, MAX_VALUE) for i in range(7)] +  # days of week
            [
                random.randint(MIN_VALUE, MAX_VALUE) * 30,              # month
                random.randint(MIN_VALUE, MAX_VALUE) * 365              # year
            ]
        )
