//*************  code step by step channel 25 & 26  https://www.youtube.com/watch?v=2e2E5cvLw0g&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At&index=26******* */

// WHAT ARE MIDDLEWARE
// HOW TO MAKE A MIDDLEWARE
// APPLY MIDDLEWARE ON ROUTES
// TYPES OF MIDDLEWARE
 
const express = require('express');
const app = express();

const reqFilter = (req ,resp , next)=> {     //localhost:5000/?age=19 
    if (!req.query.age)
    {
        resp.send('please provide age ')
    }
    else if(req.query.age<18)
    {
       resp.send('you can not access this page') 
    }
    else 
    {
        next();
    }

}
app.use(reqFilter) 

app.get('/' ,(req ,resp) => {
   resp.send('welcome to the home page ');
})

app.get('/users' , (req , resp)=> {
   resp.send('welcome to users page ');
})

app.get('/about' ,(req ,resp)=> {
   resp.send('welcome to the about page ')
})

app.listen(5000);   // to RUN THIS CODE WE NEED TO WRITE  localhost:5000/?age=19  
