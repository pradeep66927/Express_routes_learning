// *****************ExpressJS - Form data***********
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
const pug = require('pug');
var upload = multer();
var app = express();

app.get('/', function(req ,res) {
    res.render(
        'sample',
        { title : 'Express Pug ',message: 'Devnami Express PUG template'}
    );
})

app.set('view engine','pug');
app.set('views' , './views');

//for parsing application/json 
app.use(bodyParser.json());

//for parsing application/xwww-
app.use(bodyParser.urlencoded({extended: true}));
//form.urlencoded

// for parsing multipart/form-data 
app.use(upload.array());
app.use(express.static('public'));

app.post('/' ,function(req , res) {
    console.log(req.body);
    res.send("received your request!");
})
app.listen(3000);