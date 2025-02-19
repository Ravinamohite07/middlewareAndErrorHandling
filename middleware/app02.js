const express = require("express");

const app = express();

app.use("/user",(req,res) => {
    //Route handler
    //res.send("This is the route handler..!");
    console.log("we are not handle response..!!");
})


app.listen(3000,() => {
    console.log("Server running on port 3000..!")
})

//POST: http://localhost:3000/user => This is the route handler..!