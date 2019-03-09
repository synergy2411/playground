// const app = require("express")();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/public"));
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    // response.send(200, "<h2>Hello from Express!</h2>");
    // response.statusCode(200).send("<h2>Hello from Express!</h2>");
    // console.log(__filename, __dirname);
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/weather", (req, res)=>{
    res.sendFile(__dirname + "/public/weather.html");
});

app.get("/login", (req, res) => {
    if (req.query) {
        console.log(req.query);
        res.send({
            status: 200,
            message: "Hello " + req.query.username
        })
    }
})

app.post("/login", (req, res) => {
    console.log("POST API");
    if (req.body) {
        console.log("Body : ", req.body);
        res.send({
            status: 200,
            message: "POST API"
        })
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