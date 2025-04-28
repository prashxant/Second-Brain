import mongoose, { model,Schema } from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly");

const UserSchema = new Schema({
    username: {type: String ,unique: true },
    password: String
})


const ContentSchema = new Schema({
    title: String,
    link: String,
    tags:[{type: mongoose.Types.ObjectId,ref:'Tag'}]
})

export const UserModel = model ("User", UserSchema)

