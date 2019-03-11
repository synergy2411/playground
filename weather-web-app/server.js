// const app = require("express")();
const express = require("express");
const bodyParser = require("body-parser");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const logger = require("./middlewares/logger");

const app = express();

app.use(express.static(__dirname + "/public"));
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger.log);

app.get("/", (request, response) => {
    // response.send(200, "<h2>Hello from Express!</h2>");
    // response.statusCode(200).send("<h2>Hello from Express!</h2>");
    // console.log(__filename, __dirname);
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/weather", (req, res)=>{
    res.sendFile(__dirname + "/public/weather.html");
});

app.get("/getweather", (req, res)=>{
    console.log("Address : " + req.query.address);
    if(req.query){
        
        geocode.getLocation(req.query.address, (error, location)=>{
            if(error){
                console.log(error);
            }else{
                forecast.getForecast(location.latitude, location.longitude, (error, forecastData)=>{
                    if(error){
                        console.log(error)
                    }else{
                        res.send(forecastData );
                    }
                })
            }
        })
    }
})

app.get("/login", logger.log, (req, res) => {
    // if (req.query.username !== "") {
    //     console.log(req.query);
    //     res.send({
    //         status: 200,
    //         message: "Hello " + req.query.username
    //     })
    // }else{
    //     res.send({error : "No user found"})
    // }
})



app.post("/login", (req, res) => {
    if (req.body.username !== "") {
        console.log(req.body);
        res.send({
            status: 200,
            message: "POST API"
        })
    }else{
        res.send({error : "No user found"})
    }
})

app.get("/about", (req, res) => {
    res.json({
        data: "Hello World",
        status: "OK"
    })
})

app.listen(3000, () => {
    console.log("Server started at port 3000...");
});


// npm install nodemon -g
// nodemon server.js