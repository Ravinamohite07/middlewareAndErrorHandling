const express = require("express");

const app = express();

app.use("/user",[(req,res,next) => {
    //Route handler
    console.log("Handling the route user 1st..!!");
    //res.send("This is the 1st route handler..!"); 
    next() ; 
},
(req,res,next) => {
    console.log("Handling the route user 2nd..!!");
    //res.send("This is the 2nd route handler...!");
    next();
},
(req,res,next) => {
    console.log("Handling the route user 3rd..!!");
    //res.send("This is the 3rd route handler...!");
    next();
},
(req,res,next) => {
    console.log("Handling the route user 4th..!!");
   // res.send("This is the 4th  route handler...!");
   next();
},
(req,res) => {
    console.log("Handling the route user 5th..!!");
    res.send("This is the 5th  route handler...!")
}]
);

app.listen(3000,() => {
    console.log("Server running on port 3000..!");
});


