const express = require("express");

const app = express();

app.use("/user",(req,res,next) => {
    //Route handler
    console.log("Handling the route user 1st..!!");
    //res.send("This is the 1st route handler..!");
    next() ; 
},
(req,res) => {
    console.log("Handling the route user 2nd..!!");
    res.send("This is the 2nd route handler...!");
}
);


app.listen(3000,() => {
    console.log("Server running on port 3000..!")
})
// GET: http://localhost:3000/user => This is the 2nd route handler...!