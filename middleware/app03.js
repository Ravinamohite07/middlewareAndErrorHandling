const express = require("express");

const app = express();

app.use("/user",(req,res) => {
    //Route handler
    console.log("This is the 1st route handler..!");
    res.send("This is the 1st route handler..!");
},
(req,res) => {
    console.log("This is the 2nd route handler..!");
    res.send("This is the 2nd route handler...!");
}
)


app.listen(3000,() => {
    console.log("Server running on port 3000..!")
})

//GET: http://localhost:3000/user => This is the 1st route handler..!
//AS soon as app running , req come over here and it goes to the 1st route handler
//& then execute code line by line,res send to back & console log logged into the console
// it not go any further..
