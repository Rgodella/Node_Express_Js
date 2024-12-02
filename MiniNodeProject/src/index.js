const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/text',(req,res)=>{
        res.send("Welcome to 3001 !");   
        console.log(dotenv); 
})

const PORT = process.env.DB_PORT || 8001
app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`)
})