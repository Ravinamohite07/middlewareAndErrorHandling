const express = require("express");

const app = express();

app.use("/user",(req,res,next) => {
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
}
);

app.listen(3000,() => {
    console.log("Server running on port 3000..!");
});

//GET: http://localhost:3000/user => Cannot GET /user
//CONSOLE: Server running on port 3000..!
//Handling the route user 1st..!!
//Handling the route user 2nd..!!
//Handling the route user 3rd..!!
//Handling the route user 4th..!!
// in postman we got an error as Cannot GET /user becouse
//becouse in 4th function we are calling next function and 
//express is expecting another route handler over here and we are not defined
// the route handler so basically it says Cannot GET /user