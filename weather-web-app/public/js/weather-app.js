let button = document.querySelector("button");
let address = document.querySelector("#address");
let success = document.querySelector("#success");

button.addEventListener("click", (event) => {
    console.log(address.value);
    event.preventDefault();
    fetch("http://localhost:3000/getweather?address=" + address.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
            success.innerHTML = "Temperature : " + myJson.temperature + "\nForecast is " + 
                myJson.dailySummary
        })
        .catch (err => console.log(err));
})
