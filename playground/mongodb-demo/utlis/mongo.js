const mongodb = require("mongodb");
const client = mongodb.MongoClient;
var _db;
let connect = () => {
    client.connect("mongodb://localhost:27017", (error, mongo) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log("Mongo Connected!");
        _db = mongo.db("travelex_db");
    })
}

let read = () => {
    return _db.collection("users");
}

let find = (key, cb)=>{
    _db.collection("users").find(key).toArray((err, result)=>{
        if(err) {
            cb(err);
            return ;
        }
        console.log("result :" ,  result);
        cb(null, {found : true, result});
        
    })
}

let create = (doc) => {
    _db.collection("users").insert(doc, (error, result)=>{
        if(error){
            console.log("Can't insert.")
        }
        console.log("Data inserted.")
    })
}

let update = () => {

}

let remove = (key) => {
    _db.collection("users").remove(key, (error, result)=>{
        if(error){
            console.log(error);
        }
        console.log("Data deleted.")
    })


}

module.exports = { connect, create, update, read, remove, find }