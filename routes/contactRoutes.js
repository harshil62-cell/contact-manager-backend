const express=require('express');
const router=express.Router();
const {getContacts,getContact,createContact,updateContact,deleteContact}=require('../controllers/contactController');

router.get('/',getContacts);

router.post('/',createContact);

router.get('/:id',getContact);

router.put('/:id',updateContact);

router.delete('/:id',deleteContact);

module.exports=router;