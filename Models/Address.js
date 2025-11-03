import mongoose from "mongoose";

const Address = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
});

export default Address;