import mongoose from "mongoose";
import Address from "./Address.js";


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: { type: String, unique: true },
    phoneNumber: String,
    JobTitle: String,
    gender: String,
    dateOfBrith: Date,
    address: Address,
    languages: String,
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('User', userSchema);