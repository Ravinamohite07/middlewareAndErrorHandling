const express = require("express");

const app = express();

app.get("/getUserData",(req,res) => {
    try{
        throw new error("xyzweee");
        res.send("user data send..!");
    }catch (err) {
        res.status(500).send("some error contact support team..!");
    }  
});

app.use("/",(err,req,res,next) => {
    if (err) {
        //log an error
        console.log(err);
        res.status(500).send("something wrong went..!");
    }
});

app.listen(3000,() => {
    console.log("server succesfully run");
});