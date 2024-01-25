const express=require("express");
const router=express.Router();

router.get("/",function(req,res,next){
    res.render("persons");
});

router.get("/:id",function(req,res,next){
    res.render("person",{person:req.params.id});
});

module.exports=router;