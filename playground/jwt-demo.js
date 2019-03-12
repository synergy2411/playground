var express = require("express");
var app = express();
var jwt = require("jsonwebtoken");

app.get("/api", (req, res)=>{
    res.send({message : "Success API"})
})
app.post("/api/login", (req, res)=>{
    let user = {id : "101"};

    var token = jwt.sign(user, "my_super_secret_key");
    console.log(token);

    res.send({
        token : token,
        message : "Successfully logged in."
    })
})

function authenticate(req, res, next){
    // console.log(req.headers["Authorization"]);
    let bearer = req.headers["authorization"];
    if(bearer != undefined){
        let bearerToken = bearer.split(" ");
        let token = bearerToken[1];
        req.token = token;
        next();
    }
    else{
        res.redirect("/api")
    }
    
}

app.get("/api/protected", authenticate, (req, res)=>{
    var user = jwt.verify(req.token, "my_super_secret_key");
    console.log("USER : ", user);
    res.send({
        message : "You are watching protected route.",
        status : 200,
        user : user
    })
})

app.listen(3000, function(){
    console.log("Server running on port 3000");
})