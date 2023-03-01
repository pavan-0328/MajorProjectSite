const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');

const app  = express();

app.use(cors());
app.use(body_parser.json());


app.post('/api/sNumPlate',(req,res)=>{
    const formData = req.body;
    console.log(formData['numplate']);
    res.send("Data Sent");
})

app.listen(3000,(req,res)=>{
    console.log("Api Running in Port 3000");
})