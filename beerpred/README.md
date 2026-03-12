# Alcohol Consumption Predictor (Flask ML Web App)

An interactive machine learning web application that predicts **total litres of pure alcohol consumption** using country-level beverage consumption data.

The project demonstrates a complete **ML pipeline → web deployment workflow**.

---

## Features

- Exploratory Data Analysis (EDA)
- Data preprocessing and missing value handling
- Multiple regression models
- Hyperparameter tuning
- Best model selection using **R² score**
- Interactive Flask web interface
- Dataset visualizations (infographics)
- Dynamic dropdowns populated from dataset
- Real-time prediction using JavaScript (no page reload)

---

## Dataset

Source: FiveThirtyEight Drinks Dataset

Features used:

- Country
- Beer Servings
- Spirit Servings
- Wine Servings
- Continent

Target variable:

- `total_litres_of_pure_alcohol`

Dataset contains **193 countries**.

---

## Machine Learning Models Used

Two regression models were trained:

1. Linear Regression
2. Random Forest Regressor

Hyperparameter tuning was performed using **GridSearchCV**.

The best model was selected based on **R² score on evaluation data**.

---

## Project Structure
