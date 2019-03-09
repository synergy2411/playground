// var buffer = Buffer.alloc(16);

// buffer.write("Writing over the buffer..");

// console.log(buffer.toString());

//typed array
var buffer = new ArrayBuffer(16);

var int32View = new Int32Array(buffer);
var int16View = new Int16Array(buffer);

for (var i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
}

for(var i = 0 ; i <int16View.length; i++){
    console.log("Entry " + i + " : " + int16View[i]);
}