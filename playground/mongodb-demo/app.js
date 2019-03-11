const express = require("express");
const mongo = require("./utlis/mongo");

const app = express();

mongo.connect();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})
app.get("/signup", (req, res) => {
    let user = {
        username: "foo1@test.com",
        password: "test@123"
    }
    mongo.create(user);
    res.send({msg : "Creating..."})
})
app.get("/remove", () => {
    let userkey = { username: "foo1@test.com" }
    mongo.remove(userkey);
})
app.get("/update", () => {
    let updateData = { newPassword: "new@123" }
    // mongo.update(updateData);
})
app.get("/read", async (req, res) => {
    let users = await mongo.read();
    console.log(users);
    users.find().toArray((error, docs) => {
        if (error) {
            console.log(error);
        }
        docs.forEach(user => {
            console.log("Username : ", user.username);
            console.log("Password : ", user.password);
        })
    })

    res.send({ msg: "Reading..." })
})

app.listen(3000, () => {
    console.log("Server running on Port 3000");
})