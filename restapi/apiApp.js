const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// CORS = Cross Origin Resource Sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }

    next();
});

// BODY Parser - enable to send data though POST BODY
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTES
const userRoute = require("./routes/users.js");
app.use("/api/users", userRoute);

const itemRoute = require("./routes/itemList.js");
app.use("/api/items", itemRoute);

module.exports = app; 