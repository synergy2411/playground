const http = require("http");

var server = http.createServer(function(request, response){
    console.log("Method : ", request.method);
    console.log("Url : ", request.url);
    response.writeHead(200);
    response.write("Hello World!");
    response.end();
})

server.listen(3000);