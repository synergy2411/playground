const yargs = require("yargs");
const geocode = require("./geocode");
const forecast = require("./forecast");

var argv = yargs.option({
    address : {
        demand : true,
        string : true,
        alias : "a",
        description : "Tell address to see weather"
    }
}).argv;

if(argv.address){
    geocode.getLocation(argv.address, function(error, location){
        if(error){
            console.log(error);
        }else{
            // console.log(location);
            forecast.getForecast(location.latitude, location.longitude, function(error, forecastData){
                if(error){
                    console.log(error);
                }else{
                    console.log(`
                    Right now, it seems ${forecastData.temperature} in ${location.address}!
                    Forecast is ${forecastData.dailySummary}.
                    
                    `)
                }
            })
        }
    })
}

// console.log("Address : ", argv.address);