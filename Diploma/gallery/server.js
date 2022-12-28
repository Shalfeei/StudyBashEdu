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

var expressSession = require("express-session");
app.use(expressSession({
    "key": "user_id",
    "secret": "User secret object ID",
    "resave": true,
    "saveUninitialized": true
}));

const getUser = (userId, callBack) => {
    database.collection("users").findOne({
        "_id": ObjectId(userId)
    }, (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        if (callBack != null) {
            callBack(result);
        }
    });
}

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

            if (request.session.user_id) {
                getUser(request.session.user_id, (user) => {
                    result.render("index", {
                        "isLogin": true,
                        "query": request.query,
                        "user": user
                    })
                });
            } 
            else {
                result.render("index", {
                    "isLogin": false,
                    "query": request.query
                });
            }
        });
    });
});