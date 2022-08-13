import express from "express";
import cartsRouter from './api/cartsRouter.js';
import productsRouter from './api/productsRouter.js';
import authRouter from './api/authRouter.js';

const apiRouter = express.Router();

apiRouter.use('/carts', cartsRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/auth', authRouter);

export default apiRouter;