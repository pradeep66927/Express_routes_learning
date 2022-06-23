var express = require('express');
var app = express();

app.use(express.static('public'));
// app.use(express.static('Image'));

app.listen(3000 , function(){
    console.log('server started');
});

// app.get('/test' , (req , res) =>{
//     res.send('hi am here ')
// })


//------Virtual path Prefix -------------------------------

// var express = require('express');
// var app = express();

// app.use('/static' , express.static('public'));
// app.listen(3000);
