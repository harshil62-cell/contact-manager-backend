const express=require('express');
const dotenv=require('dotenv').config();
const contactRoutes=require('./routes/contactRoutes.js');
const { errorHandler } = require('./middleware/errorHandler.js');
const { connectDb } = require('./config/dbConnection.js');

connectDb();
const app=express();

const port=process.env.PORT;

app.use(express.json());
//Routes
app.use('/api/contacts',contactRoutes);
//Middleware for handling error
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})