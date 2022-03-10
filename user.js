import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {type: String, required:true},
    surname: {type: String, required: true},
    age:{type: Number, required: true}
});

export default mongoose.model('User', User);