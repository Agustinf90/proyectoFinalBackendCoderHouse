import mongoose from "mongoose";

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    // email: {type: String, required: true},
    password: {type: String, required: true},
    username: {type: String, required: true},
    // age: {type: Number, required: true},
    // address: {type: String, required: true},
    // picture: {type: String, required: true},
});

export const users = new mongoose.model(usersCollection, usersSchema)