const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/text',(req,res)=>{
        res.send("Welcome to 3001 !");  
        console.log(process.env); 
})

const PORT = process.env.DB_PORT || 8001
app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`)
})