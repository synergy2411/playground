var express = require("express");
var path = require("path");
var hbs = require("hbs");

var app = express();

var publicDirectory = path.join(__dirname, "/public");
var viewsPath = path.join(__dirname, "/templates/views");
var partialsPath = path.join(__dirname, "/templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


app.use(express.static(publicDirectory));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about", {
        username: "Mukesh"
    });
})

app.listen(3000, () => {
    console.log("Server started at Port 3000");
})