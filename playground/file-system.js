const fs = require("fs");

const readStream = fs.createReadStream("functions.js");

const writeStream = fs.createWriteStream("contents.txt");

readStream.pipe(writeStream);