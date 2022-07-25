
import express from 'express';
import apiRouter from './routes/apiRouter.js';
import __dirname from './utils.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.use('/api', apiRouter);

const server = app.listen(PORT,()=>console.log(`Listening to the port:  ${PORT}`));
server.on('error', error => console.log('Servidor express en error:', error) );