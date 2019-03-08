var toExport = require("./to-export");
// var { publicFun }= require("./to-export");


console.log(toExport.myModule().randomNumber);
var moduleObj = toExport.myModule();


// Destructuring : Objects / Arrays

var obj = {
    drawText : function(){console.log("Drawing")},
    drawCircle : function(r){console.log(Math.PI * r *r)}
}

var {drawCircle, drawText} = obj;

drawCircle(3);


