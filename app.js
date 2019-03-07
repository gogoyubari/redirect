'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var ip = require('ip');
const PORT = process.env.PORT || 7000;
var Client = require('node-rest-client').Client;
var client = new Client();

app.get('/' , function(req, res){
    client.get("http://www.google.com:80", (data, response) => {
        res.send(data ? data.toString('utf8') : "ERROR");
    });
});

http.listen(PORT, function(){
    console.log(`Listening ${ip.address()}:${PORT}. press Ctrl+C to stop.`);
});
