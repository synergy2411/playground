const express = require("express");
const bodyParser = require("body-parser")

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

let items = [];

router.route("/")           //localhost:3030/todo
    .get((req, res) => {
        res.send({
            status: "Found",
            items: items
        })
    })
    .post((req, res) => {
        if (req.body) {
            items.push(req.body);
            res.send({
                status: "Updated",
                itemId: items.length - 1
            })
        }
    })
    .put((req, res) => {
        items = req.body;               // req.body is an object; items is an array
        res.send({
            status : "Replaced"
        })
     })
    .delete((req, res) => {
        items = [];
        res.send({
            status : "Deleted",
        })
     })

router.route("/:id")
     .get((req, res)=>{
         let id = req.params['id'];
         if(id && items[Number(id)]){
            res.send({
                status : "Found",
                item : items[Number(id)]
            })
         }
     })
     .all((req, res)=>{
         res.send({
             status : "500",
             message : "Not Implemented"
         })
     })


const app = express();

app.use("/todo", router)           // Using Router

app.listen(3030, () => {
    console.log("Express running on Port 3030...");
})
