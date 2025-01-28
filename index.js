import mongoose from "mongoose";

connectDB().then(() => console.log("Data Base Connected !")).catch(() => ("Error Connecting the db"))

async function connectDB() {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
}

// How to create a schema 

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    } ,
    email: String , 
    password: Number
})