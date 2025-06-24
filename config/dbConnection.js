const mongoose=require('mongoose');

const connectDb=async()=>{
    try {
        const connect=await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected: ",connect.connection.host,connect.connection.name);
    } catch (error) {
        console.log("Error connecting db",error);
        process.exit(1);
    }
};

module.exports={
    connectDb
}