const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
//Importación Body-Parser
const bodyParser = require('body-parser')


//Importando conexion mongoDB
const BDfile = require('./conexion')

//Importacion archivo rutas y modelo Cot
const rutacot = require('./Routes/cotizacion')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
app.use('/api/cotizacion', rutacot)

app.get("/", (req,res)=>{
    res.send("Bienvenido server backend Node")
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})