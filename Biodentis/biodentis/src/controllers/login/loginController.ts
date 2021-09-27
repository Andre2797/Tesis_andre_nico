
import { request, response } from "express";
'üse strict'
const mongoose=require('mongoose');

const esquema=require('../../model/login/Odontologo');
const Odo=require('../../dao/login.dao');

 exports.createOdontolo = (req, res) => {
     let newOdo = new esquema (req.body);

     
     newOdo.save((err,odon) => {
         if (err){
             res.status(500).send(err);
         }
         res.status(201).json(odon);
         mongoose.connection.close();
     });
 };

exports.loginOdontolo = (req, res) => {
    esquema.findOne({correo:req.body.correo}, req.body, {new:false}, (err,odon)=>{
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
    exports.cambioContraseñaOdontolo = (req, res) => {
        esquema.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,odon)=>{
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