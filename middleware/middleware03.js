const express = require("express");

const app = express();

app.use("/user",(req,res,next) => {
    //Route handler
    console.log("Handling the route user 1st..!!");
    next() ; 
    res.send("This is the 1st route handler..!"); 
},
(req,res) => {
    console.log("Handling the route user 2nd..!!");
    res.send("This is the 2nd route handler...!");
}
);


app.listen(3000,() => {
    console.log("Server running on port 3000..!");
});

// GET: http://localhost:3000/user => This is the 2nd route handler...!
//CONSOLE:Server running on port 3000..!
//Handling the route user 1st..!!
//Handling the route user 2nd..!!
//Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
// we got an error becouse when we called next()..2nd route handler goes to the
// the call stack & .....all the procedure followed 
// next code is finished & now it will go res.send("This is the 1st route handler..!")
//running this line & we get an error
// *** WHY GOT AN ERROR: BECOUSE WE ARE TRYING TO SEND RESPONSE AGAIN
// TO THE CLILENT WHEN THE REQUEST IS ALLREDY FULFILLED....