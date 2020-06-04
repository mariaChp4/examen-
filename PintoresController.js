let mongoose = require('mongoose');
let pintores = require('../models/pintores');
let pintoresController ={};
/*LISTAR -> FIND()*/
pintoresController.list = (req, res)=>{
    pintores.find({})
    .limit(20)
    .skip(0)
    .exec( (err, pintor)=>{
        if(err){
        console.log('Error:', err)
    }
    res.render('../views/index',{
        
        pintores:pintor,
        titulo:"listado de pintores",
        year: new Date().getDate()
    })
  })
};
module.exports = pintoresController;
