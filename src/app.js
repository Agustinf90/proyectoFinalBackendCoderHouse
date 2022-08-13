
import express from 'express';
import apiRouter from './routes/apiRouter.js';
import __dirname from './utils.js';
import './persistence/mongo.js'
import isAdmin from './middlewares/isAdmin.js';
import {migrate} from './persistence/mongo.js';
import session from 'express-session';
import passport from 'passport';


const app = express();
const PORT = process.env.PORT || 8080;

// load initial data base //
// migrate();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', isAdmin, apiRouter);
app.use((err, req, res, next)=>{
    res.status(500).send("There was an error", err);
});



app.use(session({
    secret: process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    rolling:true
}))

import './middlewares/passportAuth.js';

app.use(passport.authenticate('session'));

const server = app.listen(PORT, () => console.log(`Listening to the port:  ${PORT}`));
server.on('error', error => console.log('Servidor express en error:', error));