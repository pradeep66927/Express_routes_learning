//  CODE STEP BY STEP 26  https://www.youtube.com/watch?v=2e2E5cvLw0g&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At&index=26

// ROUTE LEVEL MIDDLEWARE
// APPLY MIDDLE ON SINGLE ROUTE
// MADE MIDDLEWARE IN DIFFERENT FILE
// APPLY MIDDLEWARE IN THE GROUP OF ROUTE

// const express = require('express');
// const reqFilter = require('./middlewarefolder/middleware_use');  // MIDDLEWARE EXPORTS FROM OTHER FOLDER AND APPLY 
// const app = express();



// //******  ONLY APPLY MIDDLEWARE FOR USERS, ABOUT ********/

// app.get('/' ,(req ,resp) => {
//    resp.send('welcome to the home page ');
// })

// app.get('/users' ,reqFilter, (req , resp)=> {
//    resp.send('welcome to users page ');
// })

// app.get('/about' ,reqFilter,(req ,resp)=> {
//    resp.send('welcome to the about page ')
// })



// app.listen(5000);   // to RUN THIS CODE WE NEED TO WRITE  localhost:5000/?age=19  


// //******* APPLY MIDDLEWARE FOR SOME GROUP , BECAUSE 1 OR 2 INDIVISUALLY USE KARANA SAHI HAI BUT */
// //** JAB GROUP OF ROUTES MAI MIDDLEWARE LAGANA HAI TO AISE USE KARENGE */

const express = require('express');
const reqFilter = require('./middlewarefolder/middleware_use');
const app = express();
const route = express.Router();

route.use(reqFilter);

app.get('/' ,(req ,resp) => {
    resp.send('welcome to the home page ');
})
 
app.get('/users' , (req , resp)=> {
    resp.send('welcome to users page ');
})
 
route.get('/about' ,(req ,resp)=> {
    resp.send('welcome to the about page ')
})

route.get('/contact' ,(req ,resp)=> {
    resp.send('welcome to the contact page ')
})
 
app.use('/', route) 
app.listen(5000);   // to RUN THIS CODE WE NEED TO WRITE  localhost:5000/?age=19  
 
 
