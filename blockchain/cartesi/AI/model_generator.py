import pandas as pd
import m2cgen as m2c
from sklearn import svm
from sklearn.preprocessing import StandardScaler
from sys import argv


class CarbonAI:
    def __init__(self, model_name, csv_file, exclude, dependent_var):
        self.data_frame = pd.read_csv(csv_file)
        self.include = [
            col for col in self.data_frame.columns if col not in exclude]
        self.dependent_var = dependent_var
        self.model_name = model_name

    def normalize_scale(self):
        self.scaler = StandardScaler()
        self.train_df_scaled = pd.DataFrame(self.scaler.fit_transform(
            self.data_frame[self.include]), columns=self.include)
        self.x = self.scaler.fit_transform(self.x)

    def train_model(self):
        self.model = svm.SVR(kernel='linear')
        self.model.fit(self.x, self.y)

    def export_and_save_model(self):
        self.model_to_python = m2c.export_to_python(self.model)
        with open(f'{self.model_name}_model.py', 'w') as text_file:
            print(f'{self.model_to_python}', file=text_file)

    def generate_model(self):
        self.x = self.data_frame[self.include].values
        self.y = self.data_frame[self.dependent_var].values

        self.normalize_scale()

        self.train_model()

        self.export_and_save_model()


if __name__ == '__main__':
    model_name = argv[1]
    csv_file = argv[2]
    exclude = argv[3].split(',')
    dependent_var = argv[4]

    print(model_name, csv_file, exclude, dependent_var)

    carbon_ai = CarbonAI(model_name, csv_file, exclude, dependent_var)
    carbon_ai.generate_model()
