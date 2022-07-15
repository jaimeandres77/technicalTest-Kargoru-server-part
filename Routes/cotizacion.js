const express = require('express');
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaCot = new schema({
    nombre:String,
    origen:String,
    destino:String,
    transporte:String,
    costoTotal:String,
    idCot:String
})
const ModeloCot = mongoose.model('cotizaciones', schemaCot)
module.exports = router

/*
router.get('/ejemplo', (req,res)=>{
    res.send('Saludo provando ruta ejemplo')
})
*/

//Agregar cada cotizacion
router.post('/agregarCotizacion', (req,res) =>{
    const nuevaCot = new ModeloCot({
        nombre: req.body.nombre,
        origen: req.body.origen,
        destino:req.body.destino,
        transporte: req.body.transporte,
        costoTotal: req.body.costoTotal,
        idCot: req.body.idCot
    })

    nuevaCot.save(function(err){
        if(!err){
            res.send('Cotización agregada correctamente')
        }else{
            res.send(err)
        }
    })
})

//Obtener todas las cotizaciones.

router.get('/obtenerCotizaciones', (req,res)=>{
    ModeloCot.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Obtener data Cotizacion
router.post('/obtenerDataCot', (req,res)=>{
    ModeloCot.find({idCot:req.body.idCot},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//actualizar Cotizacion
router.post('/actualizarCotizacion', (req,res) =>{
    
    ModeloCot.findOneAndUpdate({idCot:req.body.idCot},{
        nombre: req.body.nombre,
        origen: req.body.origen,
        destino:req.body.destino,
        transporte: req.body.transporte,
        costoTotal: req.body.costoTotal,
    }, (err) => {
        if(!err){
            res.send("Cotizacion actualizada correctamente")
        }else{
            res.send(err)
        }
    })
})

//Eliminar una Cotizacion
router.post('/borrarCotizacion', (req,res)=>{
    ModeloCot.findOneAndDelete({idCot:req.body.idCot}, (err)=>{
        if(!err){
            res.send("Cotizacion borrada correctamente")
        }else{
            res.send(err)
        }
    })
})

