import { request, response } from "express";
import mongoose, { Schema } from 'mongoose';
'üse strict'

var Esquema = require('../../model/diagnostico/diagnosticoModel');
var EsquemaPaciente = require('../../model/paciente/pacienteModel');
var EsquemaOdontograma = require('../../model/diagnostico/diagnosticoModel');

exports.creatediagnostico = async (req, res) => {
    console.log(req.body);
    const diagnosticonew = new Esquema();
    //diagnosticonew.fecha=Date.parse(req.body.fecha);
    diagnosticonew.diagnostico = req.body.diagnostico;
    //diagnosticonew.odontograma=req.body.odontograma;
    diagnosticonew.paciente = req.body.paciente;

    EsquemaOdontograma.findOne({ odontograma: req.body.odontograma }, async (err, odon) => {
        console.log(req.body.odontograma);
        if (odon) {
            diagnosticonew.odontograma = odon._id;
            odon.diagnostico = diagnosticonew.odontograma;
            odon.save();
            await diagnosticonew.save().then((result) => {

                EsquemaPaciente.findOne({ nombre: diagnosticonew.paciente }, (err, pac) => {
                    if (pac) {
                        pac.diagnosticos.push(diagnosticonew);
                        pac.save();
                        res.json({ message: 'Odontograma  en diagnostico creado con exito' });
                    } else if (err) {
                        res.status(400).json({ message: 'Error al crear Odontograma' })
                    }
                });

            }).catch((error) => {
                res.status(500).json({ error });
            });
        }else{
            res.status(500).json({ err });
        }
    })
};