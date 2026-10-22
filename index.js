require('dotenv').config();
const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World Ashish!');
});
app.get ('/twitter',(req,res)=>{
    res.send("done of nodes");
});
 app.get('/about',(req,res)=>{
        res.send('<h1>thanks for Login for user200</h1>')
    });

    app.get('/home',(req,res)=>{
        res.send('i am web devloper ')
    
    });
    app.get('/login',(req,res)=>{
        res.send('thankes for user logine')

    })

    app.get('/youtube',(req,res)=>{
        res.send('<h1>Chai Pigiye ga </h1>')
    })

   
app.listen(process.env.PORT ,() => {
    console.log(`Server is running on port ${port}`);
});
