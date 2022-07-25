import express from "express";
import productsController from "../../controllers/productsController.js";

const productsRouter = express.Router();

// productsRouter.get('/:id', getProductById);
productsRouter.get('/', productsController.getProducts());

// productsRouter.post('/', createProduct);
// productsRouter.put('/:id', updateProductById);
// productsRouter.delete('/:id', deleteProductById);

export default productsRouter;


// routerProducts.get('/', async (req, res) => {
//     const products = await productoDao.getAll();
//     res.status(200).json(products);
// })

