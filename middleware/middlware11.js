const express = require("express");

const app = express();

//Handle Auth middleware for all GET,POST...requests
app.use("/admin",(req,res,next) =>{
    console.log("admin auth getting check..!");
    const token = "xyz"
    const isAdminAuthorizd = token === "xyz";
    if(!isAdminAuthorizd){
        res.send("admin is not authorized...!");
    }else{
        next();
    }

})

app.get("/admin/GetAllData",(req,res) => {

        res.send("all data send..!");
});

app.delete("/admin/DeleteAllData",(req,res) => {

        res.send("all data deleted..!");

});

app.listen(3000,() => {
    console.log("Server is running on port 3000!");
})