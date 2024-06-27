const mongoose =require('mongoose');
require('dotenv').config();

const connectString =process.env.MONGO_URI;
const connectMongoDb =async()=>{
    try{
        await mongoose.connect(connectString);
        console.log("Db is connected");
    }
    catch(error){
        console.log(`error in db connection:${error}`);
        process.exit(1);
    }

}
module.exports =connectMongoDb;