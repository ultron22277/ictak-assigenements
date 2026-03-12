from flask import Flask, render_template, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

model = joblib.load("../model/model.pkl")

# Load dataset
df = pd.read_csv("../data/beer-servings.csv")

countries = sorted(df["country"].unique())
continents = sorted(df["continent"].unique())


@app.route("/")
def home():
    return render_template("index.html", countries=countries, continents=continents)


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    input_df = pd.DataFrame(
        {
            "country": [data["country"]],
            "beer_servings": [float(data["beer"])],
            "spirit_servings": [float(data["spirit"])],
            "wine_servings": [float(data["wine"])],
            "continent": [data["continent"]],
        }
    )

    prediction = model.predict(input_df)[0]

    return jsonify({"prediction": round(prediction, 2)})


if __name__ == "__main__":
    app.run(debug=True)
