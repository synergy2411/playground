var express = require("express");

var app = express();

var http = require("http");

var server = http.createServer(app);

var io = require("socket.io")(server);

var messageStack = [];

var port = process.env.PORT || 3000;


io.on("connection", client =>{
    console.log("New client connected...", client.id);
    client.emit("acknowledge", {data : "Connected"});

    client.on("msgToServer", (chatterName, msg) => {
        //check if same user
        messageStack.push(msg);
        // debugger;
        console.log(chatterName + " says : " + msg);
        client.broadcast.emit("msgToClient", chatterName , msg);
        client.emit("msgToClient", 'Me', msg);
    })

    client.on("disconnect", ()=>{
        console.log("Client disconnected." + client.id);
        //Save data into DB
        //messages available in messageStack
    })

})

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/public/socket-client.html');
})

server.listen(port, ()=>{
    console.log("Socket server running on port ", port);
})