const os = require("os");

console.log("Architecture : " + os.arch());
console.log("Cores : " + os.cpus().length);