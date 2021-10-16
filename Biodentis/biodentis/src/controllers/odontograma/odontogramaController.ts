import { request, response } from "express";
import mongoose, { Schema } from 'mongoose';
'üse strict'
var Esquema=require('../../model/odontograma/odontogramaModel');
var EsquemaDiagnostico=require('../../model/diagnostico/diagnosticoModel');

 exports.createOdontograma = (req, res) => {
    console.log(req.body);
    const odontogramanew= new Esquema();
    odontogramanew.hemiarcadaSuperiorIzquierda.pieza11.zona=req.body.hemiarcadaSuperiorIzquierda.pieza11.zona;
    odontogramanew.hemiarcadaSuperiorIzquierda.pieza11.zona.diagPieza=req.body.hemiarcadaSuperiorIzquierda.pieza11.zona.diagPieza;
  
    console.log(req.body);
     
    odontogramanew.save().then((result)=>{
      if(result){

                res.json({ message: 'Diagnostico en Odontograma creado con exito' });
            
       } else{
        res.status(400).json({ message: 'Error al crear Odontograma'});
      }  
        })
    .catch((error) => {
        res.status(500).json({ error });
      });
 };


