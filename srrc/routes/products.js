import express from "express";
import { uploader } from "../utils.js";
import fs from 'fs'


import mongoose from "mongoose";
import * as model from '../../models/estudiantes.js';


( async () => {
    
    const CS = 'mongodb://localhost:27017/products';
    try {
        await mongoose.connect(CS);
        console.log("DB CONNECTED!");
        
        

        // console.log(response);

//      let response = await model.alumnos.remove({id: 1})
// console.log(response)

        // response = await model.alumnos.find({}).sort({nombre: 1}).skip(1).limit(1)
        // response = await model.alumnos.updateOne({nombre: "Pedrox22"}, {$set:{apellido:"gomez", curso: "3B"}})
        // response = await model.alumnos.deleteOne({nombre: "Pedrox22"})
        
        // response = await model.estudiantes.find({}).select(["nombre","apellido","-_id"])
        // console.log(response)
        // response = await model.estudiantes.find({}).select(["nombre","apellido","-_id"]).sort({apellido: -1})
        // console.log(response)( async () => {

        
        // let response = await model.alumnos.insertMany(est)
        // console.log(response);
    } catch (e) {
        console.log("error: ", e);
    }
})();
let response = await model.products.find({})


const router = express.Router();
const admin = true;

let productos = []
let productosdb = response

const idProds = () => {
    let ids = 0
    productos?.forEach(producto => {
        if(producto.id > ids) {
            ids = producto.id
        }
    })
    return ids
}


const miMiddleware = (req,res,next)=> {
    if (!admin) return res.status(400).send({error: 'No tienes autorización'});
    else
    next();
 
 }


router.get('/api/prod', async (req, res)=>{
    let response = await model.products.find({})
// let response = await model.alumnos.remove({})
// console.log(response)
    console.log(response)
            res.send(response);
          
       
    

})

router.get('/api/prod/:id', async (req, res) => {

    let prodId = Number(req.params.id)
    
    //  let newArray = productos.filter((item) => item.id === prodId);
     let response = await model.products.find({id: prodId})

     // console.log(response)
         console.log(response)
 
     if (!prodId) return res.status(400).send({error: 'No existe ID'})
     res.send({response})
 })

router.post('/api/prod', miMiddleware, async (req,res)=>{

    const newProduct = {
        name: req.body.name,
        description: req.body.description,
        code: req.body.code,
        stock: req.body.stock,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
        id: idProds() +1,
        timestamp: new Date()
    }
    let response = await model.products.create(newProduct)
    productos.push(newProduct)
    // fs.writeFileSync('../src/productos.text', JSON.stringify(productos))
    res.send(response)
    
})

router.put('/api/prod/:id', miMiddleware, async (req,res)=>{
    const prodId = Number(req.params.id)
    const updateProd = req.body
    const prodIndex = productos.findIndex(product => product.id === prodId)
    // console.log(productos[prodIndex])
    let response = await model.products.updateOne({id: prodId}, {$set:updateProd})
    let responseUpdated = await model.products.find({id: prodId})
  
    res.send(responseUpdated)
    if (~prodIndex) {
        productos[prodIndex] = {
            ...updateProd,
            id: prodId,
            timestamp: new Date()
        }

    // res.send(productos[prodIndex])
  
    }

})

router.delete('/api/prod/:id', miMiddleware, async (req,res)=>{
    const prodId = Number(req.params.id)

    const prodIndex = productos.findIndex(product => product.id === prodId)
     let response = await model.products.remove({id: prodId})
    if (~prodIndex) {
        productos.splice(prodIndex, 1) 
 
    }
    res.send(productosdb)
})

export default router


