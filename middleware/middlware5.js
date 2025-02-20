const express = require("express");

const app = express();

app.get("/user",(req,res,next) => {
    console.log("handling user route handler..!");
    //res.send("This is the 2nd route handler..!")
    next();
});

app.get("/user",(req,res,next) => {
    console.log("handling route handler...!");
    next();
});

app.listen(3000,() => {
    console.log("Server is running on port 3000!");
})