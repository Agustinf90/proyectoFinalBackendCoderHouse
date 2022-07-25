import mongoose from "mongoose";

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    code: {type: Number, required: true},
    stock: {type: Number, required: true},
    price: {type: Number, required: true},
    thumbnail: {type: String, required: true},
    id: {type: Number, required: true},
    timestamp: {type: Date, required: true}
});

export const products = new mongoose.model(productsCollection, productsSchema)
// unique: true