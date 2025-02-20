const express = require("express");

const app = express();

app.get("/admin/GetAllData",(req,res) => {
    // logic of checking if the request is authorized
    const token = "xyz";
    const isAdminAuthorizd = token === "xyz";
    if(isAdminAuthorizd){
        res.send("all data send..!");
    }else{
        res.status(401).send("unauthorized request..!");
    }

});

app.listen(3000,() => {
    console.log("Server is running on port 3000!");
})