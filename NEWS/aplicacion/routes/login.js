const express=require("express");
const { NotExtended } = require("http-errors");
const router=express.Router();

//GET --> SEND FORM
router.get("/",function(req,res,next){
    res.render("login");
});

//POST --> GET FORM DATA
router.post("/",function(req,res,next){
    console.log(req.body);
    if(req.body.email!="" && req.body.pass!=""){
        res.render("login",{message:"Login Successfull!"});
    }
    else{
        res.render("login",{message:"Invalid data"});
    }
});

module.exports=router;