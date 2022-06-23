// API

// get  ------read
// post --------create
// put  --------update
// delete --------delete 

//// NODEMON:- it run automatically all changes we make in vscode
//// every time we not need to write node filename.js
//// To RUN NODEMON IN VS CODE  WRITE ------> npm start 



// var express = require("express");
// var app = express();

// app.get('/',function(req,res){
//     res.send("hi mere jaan")
// })

// app.get('/aboutpradeep',function(req,res){
//     res.send("hi sare jha se achhan from about page 2 ")
// })

// app.listen(3000,()=>{
//     console.log("coneccted");
// })

//// practice express with let

// let express = require("express");
// let app = express();

// app.get('/aboutpradeep',function(req,res) {
//     res.send('i am practicing with let ')
// })

// app.listen(3000,()=> {
//     console.log('ha connnect ho gaya hai')
// })

////  practice with const 
// const express = require('express');
// const app = express();

// app.get('/aboutpradeep', function(req , res) {
//     res.send("practice 3rd time with const");
// })

// app.listen(3000,()=> {
//     console.log('connected 3nd time ');
// })


////*********************** VIDEO-02 OF 17 THAPA TECHNICAL EXPRESS JS ******************/

// const  express = require("express");
// const app = express();
// const port = 3000;

// app.get ('/' , (req ,res)  =>{
// res.send('welcome the page of about ')
// });

// app.get ('/about ' ,  (req ,res) => {
// 	res.status(200).send (' welcome to my about page ');
// });

// app.get (" / contact " , ( req , res ) => {
//     res.send ("welcome to my contact page");
// });

// app.listen (port , () => {
//     console.log(`listening to the  port no ${port}`);
// });

//// ************** #3: How To Send HTML & JSON Data as a Response using Express JS ************

// const  express = require("express");
// const app = express ();
// const port = 4000;

// app.get ('/hello' ,(req ,res)  =>{
//     res.send('<h1>welcome the page of about http </h1>');
// });
// //// output:-welcome the page of about https 

// app.listen (port ,() => {
//     console.log(`listening to the  port no ${port}`);
// });

// //// A special method, all, is provided by Express to handle all types of http methods at a particular route using the same function.
// app.all('/test' ,function(req,res) {
//     res.send("HTTP method doesn't have any effect on this route!")
// })
//// Output: HTTP method doesn't have any effect on this route!

////*******  Express Router *****************

var express = require('express');
var app = express();

// app.use(express.static('public'));
// app.use(express.static('image'));

app.listen(3000 , function(){
    console.log('server started');
});

// console.log('hello');




