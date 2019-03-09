// const fs = require("fs");

// const readStream = fs.createReadStream("functions.js");

// const writeStream = fs.createWriteStream("contents.txt");

// readStream.pipe(writeStream);



//Transform Stream

const fs = require("fs");

const gzip = require("zlib").createGzip();

const readStream = fs.createReadStream("functions.js");

const writeStream = fs.createWriteStream("contents.zip");

readStream.pipe(gzip).pipe(writeStream);