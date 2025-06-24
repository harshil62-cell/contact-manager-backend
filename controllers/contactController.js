// What does asyncHandler do?
//no need to use try/catch inside async function
// It catches any errors thrown inside an async function and 
// automatically forwards them to your Express error-handling middleware via next(err).
const asyncHandler=require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
});

//@desc Create contacts
//@route POST /api/contacts
//@access public
const createContact=asyncHandler(async(req,res)=>{
    const{name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message:"Contact Created"});
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact=asyncHandler(async(req,res)=>{
    res.status(201).json({message:`Update contact for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Contact Deleted"});
});





module.exports={getContacts,getContact,createContact,updateContact,deleteContact};