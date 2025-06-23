const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({message:"Get All Contacts"});
})

router.post('/',(req,res)=>{
    res.status(200).json({message:"Create Contact"});
})

router.get('/:id',(req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
})

router.put('/:id',(req,res)=>{
    res.status(200).json({message:`Update Contact for ${req.params.id}`});
})

router.delete('/:id',(req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`});
})

module.exports=router;