 const adminAuth = (req,res,next) =>{
    console.log("admin auth getting check..!");
    const token = "xyz"
    const isAdminAuthorizd = token === "xyz";
    if(!isAdminAuthorizd){
        res.send("admin is not authorized...!");
    }else{
        next();
    }
};

module.exports ={
    adminAuth,
}