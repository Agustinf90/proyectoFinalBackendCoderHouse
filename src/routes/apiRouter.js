import express from "express";
import cartsRouter from './api/cartsRouter.js';
import productsRouter from './api/productsRouter.js';

const apiRouter = express.Router();

apiRouter.use('/carts', cartsRouter);
apiRouter.use('/products', productsRouter);

export default apiRouter;