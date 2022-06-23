// **************** ExpressJS - Cookies ****************

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.cookie('name' , 'express').send('cookie set'); // sets name = express
});

app.listen(3000);

// console.log(document.cookie);

