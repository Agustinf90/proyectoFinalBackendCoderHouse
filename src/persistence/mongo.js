import mongoose from "mongoose";
import * as model from '../models/products.js';
import * as modelCarts from '../models/carts.js';
import { readFile } from 'fs/promises';


(async () => {
    // const CS = `${process.env.MONGO_URI}/desafio_coder`;
    const CS = `${process.env.MONGO_URI}`;
    try {
        await mongoose.connect(CS);
        console.log("DB2 CONNECTED!");
    } catch (e) {
        console.log("error: ", e);
    }
})();

export async function migrate() {
    const products = JSON.parse(
        await readFile(
            new URL('../../database/products.json', import.meta.url)
        )
    );

    for (let product of products) {
        const newProduct = {
            name: product.name,
            description: product.description,
            code: product.code,
            stock: product.stock,
            price: product.price,
            thumbnail: product.thumbnail,
            id: 1,
            timestamp: new Date()
        }
        await model.products.create(newProduct)

    }

}