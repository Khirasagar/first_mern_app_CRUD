const express = require("express");
const mongoose = require("mongoose");
const User = require('../models/userModel');
const router = express.Router();

//create
    router.post("/",async(req,res)=>{
        const{name,email,age} = req.body;
        const User = require("./models/userModel");
try{
    const userAdded = await User.create({
        name : name,
        email : email,
        age : age,
    });
    res.status(201).json(userAdded);

}catch(error){
    res.send(400).json({error:error.message})
}
      
    });
//get
router.get ("/", async (req,res)=>{
    try{
    const showAll = await User.find();
    res.status(201).json(showAll);
    }
    catch(error){
        console.log(error);
        res.send(500).json({ error: error.message});
    }
    res.send("api running1233");
});

//get single user
router.get ("/:id", async (req,res)=>{
    const{id} = req.params;
    try{
    const singleUser = await User.findById({_id : id}); 
    res.status(201).json(singleUser);
    }
    catch(error){
        console.log(error);
        res.send(500).json({ error: error.message});
    }
    res.send("api running1233");
});
//delete
router.delete ("/:id", async (req,res)=>{
    const{id} = req.params;
    try{
    const singleUser = await User.findById({_id : id});
    res.status(201).json(singleUser);
    }
    catch(error){
        console.log(error);
        res.send(500).json({ error: error.message});
    }
    res.send("api running1233");
}); 
//patch/put

router.patch ("/:id", async (req,res)=>{
    const{id} = req.params;
    const{name, email, age}= req.body;
    try{
    const updateUser = await User.findByIdAndUpdate(id, req.body,{
        new:true,
    });
    res.status(201).json(updateUser);
    }    catch(error){
        console.log(error,123);
        res.send(500).json({ error: error.message});
    }
    res.send("api running1233");
}); 
module.exports = router;