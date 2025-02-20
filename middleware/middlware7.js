const express = require("express");

const app = express();

//GET /users =>

app.use("/",(req,res) =>{
    res.send("handling / user");
});

app.get("/user",(req,res,next) => {
    console.log("1");
    next();
},
(req,res,next) => {
    console.log("2");
    next();
},
(req,res,next) => {
    console.log("3");
    res.send("route handler..!")
}
);


app.listen(3000,() => {
    console.log("Server is running on port 3000!");
});