const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudcotizaciones')


const objBD = mongoose.connection

objBD.on('connected', ()=>{
    console.log('Conexion correcta MongoDB')
})

objBD.on('error', ()=>{
    console.log('Error en la conexion a MongoDB')
})

module.exports = mongoose