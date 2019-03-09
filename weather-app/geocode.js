const request = require("request");

function getLocation(address, callback){
    request({
        url : "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyAOIA3C43yp1OJPtEIMVNmdWpc_v5ecXx0",
        json : true,
        rejectUnauthorized : false
    }, (error, response, body)=>{
        if(error){
            // console.log("Unable to reach google server.")
            callback("Unable to reach google server.")
        }else{
            callback(null, {
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng,
                address : body.results[0].formatted_address
            });
        }
    })
}

// getLocation("Bengaluru");

module.exports = {getLocation};