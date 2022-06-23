// var express = require('express');
// var router = express.Router();

// router.get('/' ,function(req ,res) {
//     res.send('GET route on things.');
// })


// router.post('/' , function(req , res) {
//     res.send('POST route on things.')
// })

// //// export this router to use in our index.js
// module.exports = router;

// var express = require('express');
// var app = express();

// var things = require('./routersthings.js');

// // both index.js and routersthings.js should be in same directory
// app.use('/things',things)

// app.listen(3000);

// app.listen(()=>{
//     console.log('router connection successfull')
// })

//// ******ExpressJS- URL building *********************

// var express = require('express');
// var app = express();

// app.get('/:id', function(req ,res) {
//     res.send('The id you specified is ' + req.params.id);
// })

// app.listen(3000);

////////////// ****** dynamic route  ******* //////////////////////////
// var express = require('express');
// var app = express();

// app.get('/things/:name/:id' ,function(req , res) {
//     res.send('id:' + req.params.id + ' and name: '+ req.params.name);
// })
// app.listen(3000);

////--------------  Pattern Matched Routes --------------------------/////
// var express = require ('express');
// var app = express();

// app.get('/things/:id([0-9]{5})',function(req ,res) {   //Note that this will only match the requests that have a 5-digit long id. You can use more complex regexes to match/validate your routes. If none of your routes match the request,
//     res.send('id: '+req.params.id );
// })

// app.listen(3000);

////-------- To show over all other invalid routers ,it will show definetely--------------------------------

// var express = require('express');
// var app = express();

// // other routes  here
// app.get('/:id', function(req ,res) {
//     res.send('The id you specified is ' + req.params.id);
// })
// // other routes here

// app.get('*' , function(req , res) {               //if other routes is invalid it will run, This should be placed after all our routes,
//     res.send('sorry , this is an invalid url.');
// })

// app.listen(3000);

////----*********ExpressJS - Middleware-----------------------------------------------

// var express = require('express');
// var app = express();

// //Middleware function to log request protocol
// app.use('/things', function(req, res, next){
//    console.log("A request for things received at " + Date.now());
//    next();
// });

// // Route handler that sends the response
// app.get('/things', function(req, res){
//    res.send('Things');
// });

// app.listen(3000);

//*************  code step by step channel 25 & 26  https://www.youtube.com/watch?v=2e2E5cvLw0g&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At&index=26******* */

const express = require('express');
const app = express();

app.get('/' ,(req ,resp) => {
   resp.send('welcome to the home page ');
})

app.get('/users' , (req , resp)=> {
   resp.send('welcome to users page ');
})

app.get('/about' ,(req ,resp)=> {
   resp.send('welcome to the about page ')
})

app.listen(5000);








