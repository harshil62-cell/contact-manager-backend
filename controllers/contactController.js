// What does asyncHandler do?
//no need to use try/catch inside async function
// It catches any errors thrown inside an async function and 
// automatically forwards them to your Express error-handling middleware via next(err).
const asyncHandler=require("express-async-handler");
const Contact=require('../models/contactModel');
const User=require('../models/userModel');
const { format } = require('@fast-csv/format');
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
});

//@desc Create contacts
//@route POST /api/contacts
//@access private
const createContact=asyncHandler(async(req,res)=>{
    const{name,email,phone,birthday}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id,
        birthday
    });
    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("User dont have permission to update other user contacts");
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("User dont have permission to delete other user contacts");
    }
    const deletedContact=await Contact.deleteOne({_id:req.params.id});
    res.status(200).json(deletedContact);
});

//@desc download contacts in csv
//@route GET /api/contacts/export
//@access private
const exportContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=contacts.csv');

  const csvStream = format({ headers: true });

  csvStream.pipe(res);

  contacts.forEach(contact => {
    csvStream.write({
      Name: contact.name,
      Email: contact.email,
      Phone: contact.phone,
      Birthday: contact.birthday ? contact.birthday.toISOString().split('T')[0] : '',
    });
  });

  csvStream.end();
});

//@desc check wether your contact uses our application through matching their emails
//@route GET /api/contacts/check
//@access private
const checkContact=asyncHandler(async(req,res)=>{
    const {contactId}=req.params;
    const contact=await Contact.findById(contactId);
    if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
    const userToBeVerified=await User.findOne({email:contact.email});
    if(contact.email===userToBeVerified?.email){
        res.status(200).json({status:true});
    }
    res.status(200).json({status:false});
});





module.exports={getContacts,getContact,createContact,updateContact,deleteContact,exportContacts,checkContact};