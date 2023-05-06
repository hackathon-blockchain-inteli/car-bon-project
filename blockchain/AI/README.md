# Description
This folder contains the code to generate the AI models used in the Cartesi Machine.
# Usage
## Generate fake data
To create a model, first we need data, for that, we can use `generate_fake_data`, which is based on real limits to generate random carbon emission data.
```bash
python generate_fake_data.py
```
This script will create a file called `data.csv`, which will be used to generate our model.

## Generate model
```bash
python model_generator.py <model_name> <training_data_path> <exclude_columns> <target_column>
```
The model generator receives some parameters, they are:
- **model_name**: model name
    - example: `month`
- **csv_file**: csv file name
    - example: `data.csv`
- **exclude_columns**: columns to be excluded from the model training, separated by commas
    - example: `month_predict,year_predict`
- **dependent_var**: our model label
        - example: `month_predict`
