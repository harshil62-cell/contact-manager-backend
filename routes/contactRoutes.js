const express=require('express');
const router=express.Router();
const {getContacts,getContact,createContact,updateContact,deleteContact,exportContacts,checkContact}=require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);

router.get('/export',exportContacts);

router.get('/',getContacts);

router.post('/',createContact);

router.get('/:id',getContact);

router.put('/:id',updateContact);

router.delete('/:id',deleteContact);

router.get('/check/:id',checkContact);

module.exports=router;