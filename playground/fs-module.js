// const fs = require("fs");

// let contents = fs.readFileSync("functions.js");

// console.log(contents.toString());

// JSON
var data = {
    "name": "Foo",
    age: 32,
    isWorking: true
}

var jsonData = JSON.stringify(data);

var originalData =  JSON.parse(jsonData);



