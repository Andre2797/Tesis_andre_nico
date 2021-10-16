
import { request, response } from "express";
import mongoose, { Schema } from 'mongoose';
'üse strict'


var Esquema=require('../../model/login/Odontologo');
var EsquemaSucu=require('../../model/sucursales/sucursalesModel');
var EsquemaCita=require('../../model/cita/citaModel');

 exports.createOdontolo = (req, res) => {
     
    const odonew= new Esquema();
    odonew.nombre=req.body.nombre;
    odonew.apellido=req.body.apellido;
    odonew.fechaNacimiento=Date.parse(req.body.fechaNacimiento);
    odonew.correo=req.body.correo;
    odonew.contrasenia=req.body.contrasenia;
    odonew.sucursal=req.body.sucursal;
    odonew.save().then((result)=>{
        EsquemaSucu.findOne({nombre:odonew.sucursal},(err,sucu)=>{
            if(sucu){
                sucu.odontologos.push(odonew);
                sucu.save();
                res.json({ message: 'Odontologo creado con exito' });
            }else{
                res.status(500).json({ err});
            }
        })
    }).catch((error) => {
        res.status(500).json({ error });
      });
    
    
  
 };


exports.loginOdontolo = (req, res) => {
    Esquema.findOne({correo:req.body.correo}, req.body, {new:false}, (err,odon)=>{
        if (err){
            res.status(500).send(err);
        }
        if(!odon) {
            return response.status(404).send('Algo malo paso usuario');
        }else{
            const pass = req.body.contrasenia;
            if(pass){
                res.status(201).json(odon);
                mongoose.connection.close();
            }else{
                response.status(409).send('Algo malo paso contra');
            }
    }})

    };


    exports.allodontologos=(req,res)=>{
        Esquema.find({},function (err, odo){
            EsquemaCita.populate(odo,{path:"citas"},function(err,odo){
                res.status(200).send(odo);
            })
        })
    };

    exports.cambioContraseñaOdontolo = (req, res) => {
        Esquema.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,odon)=>{
            if (err){
                res.status(500).send(err);
            }
            if(!odon) {
                return response.status(404).send('Error en las credenciales');
            }else{
                const pass = req.body.contrasenia;
                if(pass){
                    res.status(201).json(odon);
                    mongoose.connection.close();
                }else{
                    response.status(409).send('Error en las credenciales');
                }
        }})
    
        };