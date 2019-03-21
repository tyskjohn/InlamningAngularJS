const express = require('express');
const app = express();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const productRoutes = require('./routes/itemList.js');
app.use('/api/itemList', productRoutes);

module.exports = app;