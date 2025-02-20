const express = require("express");

const app = express();

const {adminAuth} = require("./middleware/auth");

//Handle Auth middleware for all GET,POST...requests
app.use("/admin",adminAuth);

app.get("/admin/GetAllData",(req,res) => {

        res.send("all data send..!");
});

app.delete("/admin/DeleteAllData",(req,res) => {

        res.send("all data deleted..!");

});

app.listen(3000,() => {
    console.log("Server is running on port 3000!");
})