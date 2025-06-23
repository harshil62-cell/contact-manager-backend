const express=require('express');
const dotenv=require('dotenv').config();
const contactRoutes=require('./routes/contactRoutes.js');

const app=express();

const port=process.env.PORT;

//Routes
app.use('/api/contacts',contactRoutes);

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})