import mongoose from 'mongoose'
//import dotenv from 'dotenv';

//dotenv.config();

//const USERNAME=process.env.DB_USERNAME;
//const PASSWORD=process.env.DB_PASSWORD;

const Connection=async()=>{
    mongoose.set('strictQuery',true)
    const URL=`mongodb+srv://Ambica:Ambica12@cluster0.xpetb9l.mongodb.net/TESTING?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true});
       console.log('Database connected  by Ambica successfully');
    }catch(error){
        console.log('Error while connecting with the database',error.message);

    }
}
export default Connection;