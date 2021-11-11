import { request, response } from "express";
import mongoose, { Schema } from 'mongoose';
'üse strict'
var Esquema=require('../../model/odontograma/odontogramaModel');


 exports.createOdontograma = async (req, res) => {
    console.log(req.body);
    const odontogramanew= new Esquema();
    odontogramanew.pieza=req.body.pieza;
    odontogramanew.diagnostico=req.body.diagnostico;
   
  
    console.log(req.body);
     
    await odontogramanew.save().then((result)=>{
      if(result){
        

        res.json({ message: 'Odontograma creada con exito'}) 
      }  
        })
    .catch((error) => {
        res.status(500).json({ error });
      });
 };


