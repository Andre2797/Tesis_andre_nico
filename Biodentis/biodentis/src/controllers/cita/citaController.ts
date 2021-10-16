import { request, response } from "express";
import mongoose, { Schema } from 'mongoose';
'üse strict'


var Esquema=require('../../model/cita/citaModel');
var EsquemaSucu=require('../../model/sucursales/sucursalesModel');
var EsquemaOdo=require('../../model/login/Odontologo');
var EsquemaPaciente=require('../../model/paciente/pacienteModel');

 exports.createCita =(req, res) => {
     
    const citanew= new Esquema();
    citanew.fecha=Date.parse(req.body.fecha);
    citanew.hora=req.body.hora;
    citanew.motivo=req.body.motivo;
    citanew.sucursal=req.body.sucursal;
    citanew.odontologo=req.body.odontologo;
    citanew.paciente=req.body.paciente;

    citanew.save().then( (result)=>{
        EsquemaSucu.findOne({nombre:citanew.sucursal},(err,sucu)=>{
            if(sucu){
                sucu.citas.push(citanew);
                sucu.save();
               // res.json({ message: 'Cita en sucursal creado con exito' });
            }else if(err){
              return   res.status(500).json({ message:'Error al crear' });
            }
        });
        EsquemaOdo.findOne({nombre:citanew.odontologo},(err,odo)=>{
            console.log(odo);
            if(odo){
                odo.citas.push(citanew);
                odo.save();
                //res.json({ message: 'Cita en odontologo y sucursal creado con exito' });
            }else if(err){
               return res.status(500).json({ message: 'error al crear'  });
            }
        });
      EsquemaPaciente.findOne({nombre:citanew.paciente},(err,pac)=>{
            console.log(pac);
            if(pac){
                pac.citas.push(citanew);
                pac.save().then(()=>console.log("Paciente acrualizado")).catch(error => console.log(error));
               
               return res.json({ message: 'Cita en  odontologo ,sucursal y paciente creado con exito' });
            }else if(err){
               return res.status(500).json({ message:'error al crear' });
            } 
        }); 
       
    }).catch((error) => {
        res.status(500).json({ error });
      });
    
     
  
 };

