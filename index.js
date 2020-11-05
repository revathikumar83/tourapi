const express = require("express");
const app = express();
const importdata = require('./data.json');

let port = process.env.PORT || 3000;

app.get("/", (req,res)=> {
    res.send("hello");

})
app.get("/tours", (req,res)=> {
    res.send(importdata);
    
})
app.listen(port, ()=>{
    console.log(`app is listening on port http://localhost: ${port}`)
})