import { request, response } from "express";
import mongoose, { Schema } from 'mongoose';
'üse strict'


var Esquema=require('../../model/paciente/pacienteModel');
var EsquemaHistoria=require('../../model/historiaClinica/historiaClinicaModel');
var EsquemaDiagnostico=require('../../model/diagnostico/diagnosticoModel');

 exports.createPaciente =async  (req, res) => {
     
    const pacientenew= new Esquema();
    pacientenew.nombre=req.body.nombre;
    pacientenew.apellido=req.body.apellido;
    pacientenew.numCedula=req.body.numCedula;
    pacientenew.celular=req.body.celular;
    pacientenew.direccion=req.body.direccion;
    pacientenew.sexo=req.body.sexo;
    pacientenew.edad=req.body.edad;
   
 
    pacientenew.save().then((result)=>{
        if(result){
         
          res.json({ message: 'Paciente creado con exito' });
          
      
        }else{
          res.status(400).json({ message: 'Error al crear Paciente'});
        }  
                 
              
          })
      .catch((error) => {
          res.status(500).json({ error });
        });
    
  
 };

 

 
exports.pacientes = (req, res) => {
  Esquema.find({}).populate('citas').populate('diagnosticos').exec(function(err,pac){
    res.status(200).send(pac);
  });

  };

