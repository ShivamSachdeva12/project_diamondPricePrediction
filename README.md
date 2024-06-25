## Diamond Price Prediction

This project aims to predict the price of diamonds based on several independent features using machine learning regression techniques. The dataset used for this project is sourced from Kaggle (https://www.kaggle.com/competitions/playground-series-s3e8/data?select=train.csv).

## Dataset Details

- Independent Features: id,carat,cut,color,clarity,depth,table,x,y,z.
- Target: price

## Problem Type

This is a regression problem where the goal is to predict the price of diamonds based on the given features.

## Data Preprocessing

- Cleaning: Null values, duplicates, and outliers were removed from the dataset.
- Encoding: Categorical variables (cut, color, clarity) were encoded into numerical values for model compatibility.

## Exploratory Data Analysis (EDA)

EDA was performed to:
- Understand the distribution of each feature.
- Identify correlations between features and the target variable (price).
- Visualize relationships between different features using plots and graphs.

## Data Pipelines

Pipelines were created to automate the preprocessing steps, including:
- Data scaling
- Encoding categorical variables
- Handling null values

## Model Training

Several regression techniques were applied and evaluated:
- Linear Regression(lasso,ridge)
- Decision Tree Regression
The model with the best accuracy score on the validation set was selected for deployment.

## Tech Stack

- Frontend: HTML was used to create a user-friendly form where users can input values for the independent features.
- Web Framework: Flask was used to develop the web application for hosting the model.
- Machine Learning Libraries: Python libraries such as scikit-learn, pandas, and numpy were used for data manipulation, model training, and evaluation.
- Tools: Jupyter notebook, VS code

