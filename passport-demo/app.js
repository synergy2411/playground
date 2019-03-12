var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var session = require("express-session");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "secrect_key", resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    console.log("[SERIALIZE]", user);
    return done(null, user);        //baking cookie with username and password
})

passport.deserializeUser(function (id, done) {
    console.log("[DESERIALIZE]", id);   //fetching cookie 
    return done(null, id)
})

passport.use(new LocalStrategy(function (username, password, done) {
    let user = { username, password };
    console.log("[STRATEGY]", user);

    //Apply your logic here.

    return done(null, user);
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})


app.post("/resources", passport.authenticate("local", { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("/profile");
    })

app.get("/profile", (req, res) => {
    // res.send({ message: "Welcome Message!" });
    res.sendFile(__dirname+"/public/profile-page.html")
})

app.listen(3000, () => {
    console.log("Server listening on Port 3000");
})