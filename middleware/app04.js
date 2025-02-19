const express = require("express");

const app = express();

app.use("/user",(req,res) => {
    //Route handler
    console.log("Handling the route user 1st..!!");
    //res.send("This is the 1st route handler..!");  
},
(req,res) => {
    console.log("Handling the route user 2nd..!!");
    res.send("This is the 2nd route handler...!");
}
)

app.listen(3000,() => {
    console.log("Server running on port 3000..!")
})

//AS soon as app running , req come over here and it will go 1st route handler
//& we are not returning any responce from here ...
// so what will happen....system just hang out...
// if we  are not sending anything from the route handler
//response will hang /req will hang and it will not send any response