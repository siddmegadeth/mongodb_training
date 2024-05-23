(function() {

    log = module.exports = console.log.bind(console);
    cluster = module.exports = require('cluster');
    // 
    express = module.exports = require("express");
    app = module.exports = require('express')();
    http = module.exports = require('http').Server(app);
    // socket.io
    global.io = module.exports = require('socket.io')(http, {
        maxHttpBufferSize: 1e8, // 100 MB,
        pingTimeout: 30000,
        transports: ['websocket'],
        cors: {
            origin: process.env.PROD_SERVER_URI,
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true
        }
    });
    // 
    cors = module.exports = require('cors');
    bodyParser = module.exports = require('body-parser');
    // 
    ejs = module.exports = require('ejs');
    expressLayoutsWebsite = module.exports = require('express-ejs-layouts');
    request = module.exports = require('request');
    //mongo
    mongoose = module.exports = require("mongoose");
    MongoClient = module.exports = require('mongodb').MongoClient;
    Schema = module.exports = mongoose.Schema;
    ObjectId = module.exports = mongoose.ObjectId;

})();