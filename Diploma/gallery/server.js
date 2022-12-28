const express = require("express");
const app = express();
var http = require("http").createServer(app);

var mongodb = require("mongodb");
var ObjectId = mongodb.ObjectId;
var mongoClient = mongodb.MongoClient;

var mainURL = "http://localhost:3000";
var database = null;

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.json());

http.listen(process.env.PORT || 3000, () => {
    console.log("Connected");

    mongoClient.connect("mongodb://localhost:27017", 
    { useUnifiedTopology : true }, 
    (error, client) => {
        if (error) {
            console.log(error);
            return;
        }
        database = client.db("gallery_app");

        app.get("/", (request, result) => {
            result.render("index", {
                "isLogin": false,
                "query": request.query
            });
        });
    });
});