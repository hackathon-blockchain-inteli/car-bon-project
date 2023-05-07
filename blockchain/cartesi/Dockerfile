# syntax=docker.io/docker/dockerfile:1.4

# "as model" is the name of the stage and can be used to refer to this stage later
FROM python:3.8.10 as model

# Set working directory to AI
WORKDIR /usr/src/app
# Copy AI files to the container ( training dataset )
COPY ./AI .
# Install dependencies for the model
RUN pip3 install -r requirements.txt

# Generate fake data for the model testing
RUN python3 generate_fake_data.py


# Generate the model of month and year prediction based on a week of data:
# model_generator.py <model_name> <training_data_path> <exclude_columns> <target_column>

# Creating the model for month prediction
RUN python3 model_generator.py month data.csv month_predict,year_predict month_predict
# OUTPUT FILE NAME: month_model.py

# Creating the model for year prediction
RUN python3 model_generator.py year data.csv month_predict,year_predict year_predict
# OUTPUT FILE NAME: year_model.py

# ---------------------------------------------------------------------------------

# Now for the DApp itself
FROM --platform=linux/riscv64 cartesi/python:3.10-slim-jammy as dapp

# Set working directory to DApp
WORKDIR /opt/cartesi/dapp
# Copy DApp files
COPY . .

# Copy generated models files from the model stage to the DApp
COPY --from=model /usr/src/app/*_model.py .
# "*_model.py" is a wildcard to copy all files that end with "_model.py" ( month_model.py and year_model.py)

# Install dependencies for the DApp
RUN pip3 install -r requirements.txt
