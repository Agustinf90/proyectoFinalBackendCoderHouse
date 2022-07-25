import express from "express";
// import { uploader } from "../../utils.js";
// // import "dotenv/config"

import mongoose from "mongoose";
import * as model from '../models/products.js';
import * as modelCarts from '../models/carts.js';
// import { Console } from "console";
// import { async } from "rxjs";

( async () => {
    const CS = `${process.env.MONGO_URI}`;
    try {
        await mongoose.connect(CS);
        console.log("DB CONNECTED!");
    } catch (e) {
        console.log("error: ", e);
    }
})();
let response = await model.products.find({})


// const router = express.Router();
// const admin = true;

// let productos = []

let productosdb = await model.products.find({})
const idProds = () => {
    let ids = 0
    productos?.forEach(producto => {
        if(producto.id > ids) {
            ids = producto.id
        }
    })
    return ids
}


// const miMiddleware = (req,res,next)=> {
//     if (!admin) return res.status(400).send({error: 'No tienes autorización'});
//     else
//     next();
 
//  }


// ---------------------------------------------------

// export class ProductoDao {

//     ID_FIELD = "_id";
    
//     static async exists(id) {
//         try {
//             return await ProductosModel.findById(id);
//         } catch (error) {
//             console.log(error);
//         }
//     }

    // async getAll() {
    //     try {
    //         return await ProductosModel.find();
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    // const getProducts = async (req, res) =>{
    //     let response = await model.products.find({})
    //                 res.send(response);               
    // }

    class ProductsController {
        constructor() {
            ( async () => {
                const CS = `${process.env.MONGO_URI}`;
                try {
                    await mongoose.connect(CS);
                    console.log("DB CONNECTED!");
                } catch (e) {
                    console.log("error: ", e);
                }
            })();
        }
    // getProducts = async (req, res) =>{
    //     let response = await model.products.find({})
    //                 res.send(response);               
    // }
    
    async getProducts2 (req, res, next) {
        try {
            let response = await model.products.find({})
            res.send(response);               
        }
        catch (error){
            console.log(error)
        }
    }
}

    // async getProductById(objectId) {
    //     try {
    //         const product = await ProductosModel.findOne({
    //             [this.ID_FIELD] : objectId
    //         })
    //         console.log(product);
    //         return product;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }
    
    // async createProduct(object) {
    //     try {
    //         return await ProductosModel.create(object)
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }
    
    // async updateProductById(id, object) {
    //     try {
    //         await ProductosModel.findByIdAndUpdate(
    //             {
    //                 [this.ID_FIELD] : id
    //             },
    //             object, 
    //             {
    //                 runValidators: true
    //             })
    //         return true;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }
    
    // async deleteProductById(id) {
    //     try {
    //         return await ProductosModel.findByIdAndDelete({[this.ID_FIELD]: id})
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }
    





// ---------------------------------------------------
// router.get('/api/prod', async (req, res)=>{
//     let response = await model.products.find({})
//             res.send(response);
          
// })

// router.get('/api/prod/:id', async (req, res) => {

//     let prodId = Number(req.params.id)
    
//     //  let newArray = productos.filter((item) => item.id === prodId);
//      let response = await model.products.find({id: prodId})

//      if (!prodId) return res.status(400).send({error: 'No existe ID'})
//      res.send({response})
//  })

// router.post('/api/prod', miMiddleware, async (req,res)=>{

//     const newProduct = {
//         name: req.body.name,
//         description: req.body.description,
//         code: req.body.code,
//         stock: req.body.stock,
//         price: req.body.price,
//         thumbnail: req.body.thumbnail,
//         id: idProds() +1,
//         timestamp: new Date()
//     }
//     let response = await model.products.create(newProduct)
//     productos.push(newProduct)
//     // fs.writeFileSync('../src/productos.text', JSON.stringify(productos))
//     res.send(response)
    
// })

// router.put('/api/prod/:id', miMiddleware, async (req,res)=>{
//     const prodId = Number(req.params.id)
//     const updateProd = req.body
//     const prodIndex = productos.findIndex(product => product.id === prodId)
//     // console.log(productos[prodIndex])
//     let response = await model.products.updateOne({id: prodId}, {$set:updateProd})
//     let responseUpdated = await model.products.find({id: prodId})
  
//     res.send(responseUpdated)
//     if (~prodIndex) {
//         productos[prodIndex] = {
//             ...updateProd,
//             id: prodId,
//             timestamp: new Date()
//         }
//     }

// })

// router.delete('/api/prod/:id', miMiddleware, async (req,res)=>{
//     const prodId = Number(req.params.id)

//     const prodIndex = productos.findIndex(product => product.id === prodId)
//      let response = await model.products.remove({id: prodId})
//     if (~prodIndex) {
//         productos.splice(prodIndex, 1) 
 
//     }
//     res.send(productosdb)
// })
const productsController = new ProductsController();
export default productsController; 
