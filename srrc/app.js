import express from 'express';


import router from './routes/products.js';
import router2 from './routes/carts.js'
import __dirname from './utils.js';


const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>console.log(`Listening to the port:  ${PORT}`))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/', router2)

app.use('/', router2)
app.use('/api/prod', router2)


 app.use('/', router2)

app.use('/',router2)

app.use('/',router2)


app.use('/',router)


app.use('/',router)

app.use('/',router)

app.use('/', router)

app.get('/', (req, res) => {
    let {num} = req.params
    let parseNum = parseInt(num)
    let idNum = parseNum
    let ID = idNum -1

    let carto = cartz[ID]
    
     if (!carto) return res.status(400).send({error: 'No existe ID'})
     res.send({carto})
 })

app.use('/:num/productos',router)

app.use('/:id/productos/:id_prod',router)