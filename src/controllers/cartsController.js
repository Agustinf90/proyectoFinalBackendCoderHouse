import mongoose from "mongoose";
import * as model from '../models/products.js';
import * as modelCarts from '../models/carts.js';



// let response = await model.products.find({})


let responseCarts3 = await modelCarts.carts.find({})
let productosdb = await model.products.find({})


let carts = responseCarts3

const idCarts = () => {
    let ids = 0
    carts?.forEach(cart => {
        if (cart.id > ids) {
            ids = cart.id
        }
    })
    return ids
}




export async function createCart(req, res) {
   const newCart = {
        timestamp: new Date(),
        id: idCarts() + 1,
        products: []
    }
    let responseCarts = await modelCarts.carts.create(newCart)
    carts.push(newCart)
    res.send(responseCarts)
}

export async function getCartById(req, res) {
    let cartId = Number(req.params.id)
    let responseCarts = await modelCarts.carts.find({ id: cartId })
    res.send(responseCarts)
 }


//  export async function deleteCartById(req, res) {
//     let cartId = Number(req.params.id)
//     let responseCarts = await modelCarts.carts.find({ id: cartId })
//     res.send(responseCarts)
//  }
// router.delete('/api/productos/:id1/carrito/:id2', (req, res) => {

//     // let {id1, id2} = req.params
//     // let parseNum = parseInt(id1)
//     // let parseNum2 = parseInt(id2)

//     // let idNum = parseNum
//     // let idNum2 = parseNum2

//     // const cartIn = carts.filter(item => item.id === idNum2)

//     // let prodInCart = cartIn[0].products
//     // const prodIndex = prodInCart.findIndex(product => product.id === idNum)
//     // console.log(prodIndex)
//     // if (~prodIndex) {
//     //     prodInCart.splice(prodIndex, 1) 
//     //    }


//     res.send(responseCarts)
// }
// )
 export async function addProductToCartById(req, res) {
    let cartId = Number(req.params.cartId)
    let productId = Number(req.params.productId)

    let cartActual = await modelCarts.carts.find({ id: cartId })
    let prodActual = await model.products.find({ id: productId })
    let cartActual2 = carts.filter((item) => item.id === cartId);

    let prodInCart2 = cartActual2[0].products.find((item) => item.id === prodActual[0].id);

    if (prodInCart2) {
        prodInCart2.stock ++

        let responseCarts = await modelCarts.carts.remove({})
        let responseCarts2 = await modelCarts.carts.create(carts)
    }
    else {
        let response = await modelCarts.carts.update({id: cartId},
            {$push: {'products':    prodActual[0]},})
        cartActual2[0].products.push(prodActual[0])
    }


    let responseCarts2 = await modelCarts.carts.find({})
    res.send(responseCarts2)
    }

    responseCarts3 = await modelCarts.carts.find({})
    console.log(responseCarts3)