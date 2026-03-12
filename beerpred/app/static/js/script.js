let beer = document.getElementById("beer")
let spirit = document.getElementById("spirit")
let wine = document.getElementById("wine")

beer.oninput = () => document.getElementById("beer_val").innerText = beer.value
spirit.oninput = () => document.getElementById("spirit_val").innerText = spirit.value
wine.oninput = () => document.getElementById("wine_val").innerText = wine.value



function predictAlcohol() {

    let country = document.getElementById("country").value
    let continent = document.getElementById("continent").value

    let beer_val = beer.value
    let spirit_val = spirit.value
    let wine_val = wine.value

    document.getElementById("prediction-value").innerHTML = "Predicting..."

    document.getElementById("result-card").classList.remove("hidden")


    fetch("/predict", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            country: country,
            continent: continent,
            beer: beer_val,
            spirit: spirit_val,
            wine: wine_val

        })

    })

        .then(res => res.json())

        .then(data => {

            document.getElementById("prediction-value").innerHTML =
                data.prediction + " litres"

        })

}