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
    pacientenew.fechaNacimiento=req.body.fechaNacimiento;
    pacientenew.correo=req.body.correo;
 
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
  Esquema.find({}).populate('diagnosticos').exec(function(err,pac){
    res.status(200).send(pac);
  });
  };

  exports.cambioDatos= (req, res) => {
    console.log(req.params.id);
    Esquema.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,pac)=>{
        if (err){
            res.status(500).send(err);
        }
        if(!pac) {
            return response.status(404).send('Error al encontrar paciente');
        }else{
            const direccion = req.body.direccion;
            const celular=req.body.celular;
            console.log(req.body);            
            if(direccion || celular){
                res.status(201).json(pac);
            }else{
                response.status(409).send('Error al actualizar datos');
            }
    }})
    };