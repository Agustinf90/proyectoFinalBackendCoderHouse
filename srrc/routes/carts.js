import express from "express";
import { uploader } from "../utils.js";

import fs from 'fs'


import mongoose from "mongoose";
import * as model from '../../models/estudiantes.js';
import * as modelCarts from '../../models/carts.js';
import { Console } from "console";


( async () => {
    
    const CS = 'mongodb://localhost:27017/products';
    try {
        await mongoose.connect(CS);
        console.log("DB2 CONNECTED!");
    } catch (e) {
        console.log("error: ", e);
    }
})();

let response = await model.products.find({})


let responseCarts = await modelCarts.carts.find({})


const router = express.Router();
const admin = true;

let productos = response
let productosdb = response


let carts = []



const idCarts = () => {
    let cartIds = 0
    carts?.forEach(cart => {
        if(cart.id > cartIds) {
            cartIds = cart.id
        }
    })
    return cartIds
}

router.post('/api/carrito', async(req,res)=>{
    const newCart = {
        id: idCarts() +1,
        timestamp: new Date(),
        products: []
    }
    let responseCarts = await modelCarts.carts.create(newCart)
    carts.push(newCart)

    res.send(responseCarts)
    
})


router.get('/api/carrito', async (req,res)=>{
    let responseCarts = await modelCarts.carts.find({})
    res.send(responseCarts)

})

router.delete('/api/productos/:id1/carrito/:id2',(req,res)=>{
 
    // let {id1, id2} = req.params
    // let parseNum = parseInt(id1)
    // let parseNum2 = parseInt(id2)

    // let idNum = parseNum
    // let idNum2 = parseNum2
    
    // const cartIn = carts.filter(item => item.id === idNum2)

    // let prodInCart = cartIn[0].products
    // const prodIndex = prodInCart.findIndex(product => product.id === idNum)
    // console.log(prodIndex)
    // if (~prodIndex) {
    //     prodInCart.splice(prodIndex, 1) 
    //    }

    
    res.send(responseCarts)
    }
)

router.post('/api/productos/:id1/carrito/:id2',async(req,res)=>{

    let {id1, id2} = req.params
let parseNum = parseInt(id1)
let parseNum2 = parseInt(id2)

let cartActual = []
let prodActual = []



let idNum = parseNum
let idNum2 = parseNum2

cartActual = await modelCarts.carts.find({id: idNum2})

prodActual = await model.products.find({id: idNum})



// let encontrar = await modelCarts.carts.findOne({id: idNum2},{products: {$elemMatch: {prodActual}}})
// console.log(encontrar, "ENCONTRAR")



//     if (encontrar) {
//        console.log('hola')
//     }
    // else {
        let pushear = await modelCarts.carts.updateOne({id: idNum2}, {$push: {products:[{prodActual}]}})


        cartActual[0].products.push(prodActual)
    // }
let responseCarts = await modelCarts.carts.find({})
    res.send(responseCarts)
    })


router.get('/api/carrito/productos/:id', async (req, res) => {
    let cartId = Number(req.params.id)

     let responseCarts = await modelCarts.carts.find({id: cartId})
     res.send(responseCarts)

 })




export default router