var log = (req, res, next) => {

    var start = Date.now();

    res.on("finish", () => {
        console.log("Server took " + (Date.now() - start) + "ms to server the " + req.path);
    })

    // res.send("Hello Client.")
    next();
}

module.exports = { log };