const request = require("request");

let getForecast = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to reach forecast server");
        } else {
            callback(null, {
                temperature : body.currently.temperature,
                dailySummary : body.daily.summary
            })
        }
    })
}

module.exports = { getForecast }