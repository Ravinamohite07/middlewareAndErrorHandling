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

const userAuth = (req,res,next) => {
    console.log("user auth getting check..!");
    const token = "xyz"
    const isAdminAuthorizd = token === "xyz";
    if(!isAdminAuthorizd){
        res.send("user is not authorized...!");
    }else{
        next();
    }

}

module.exports ={
    adminAuth,userAuth
}