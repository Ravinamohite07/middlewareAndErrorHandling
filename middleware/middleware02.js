const express = require("express");

const app = express();

app.use("/user",(req,res,next) => {
    //Route handler
    console.log("Handling the route user 1st..!!");
    res.send("This is the 1st route handler..!");
    next() ; 
},
(req,res) => {
    console.log("Handling the route user 2nd..!!");
    res.send("This is the 2nd route handler...!");
}
);


app.listen(3000,() => {
    console.log("Server running on port 3000..!");
});
// GET: http://localhost:3000/user => This is the 1st route handler..!
//Handling the route user 1st..!! >>   IN CONSOLE
//Handling the route user 2nd..!! >> IN CONSOLE
// also got an error : Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
//why got the error: 1st router excecuted console logged in the console and response sended to the back..
//then next() will be called & when we call this next(),it will go the 2nd route handler and this function
//excecuted line by line & this console log will printed onto the console & code will through an error
//....remaining part see on notes..