var cluster = require("cluster");
var os = require("os");
var http = require("http");

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
} else {
    var server = http.createServer(function (req, res) {
        res.write("Hello client");
        res.end();
    })
    server.listen(3000);
}