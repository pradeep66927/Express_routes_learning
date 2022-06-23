//****** USE MIDDLEWARE FROM OTHER FILE **********/
// ****  JAB BAHUT SARE MIDDLEWARE 50-60 YA 100 RAHE TO DUSARE FILE MAI BANA KE EXPORTS KAR USE KARTE HAI

module.exports = reqFilter = (req , resp ,next) =>{     // //localhost:5000/?age=19 
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
    
    // app.use(reqFilter) 
}

   
        