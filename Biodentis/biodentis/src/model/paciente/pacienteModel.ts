'use strict'
import mongoose, { Schema } from 'mongoose';
import * as Mongoose from "mongoose";
const pacienteEsquema=new Schema({
nombre:{
    type:String,
    require:true,
    max:30
},
apellido:{
    type:String,
    require:true,
    max:30
},
numCedula:{
    type:String,
    max:10,
    require:true,
    
},
celular:{
    type:String,
    max:10,
    require:true,

},
direccion:{
    type:String,
    require:false,
    max:30
},sexo:{
    type:String,
    require:false,
    max:1
},edad:{
    type:Number,
    require:false,
    min:8
},
citas: [{
    type: Schema.Types.ObjectId,
    ref: 'Cita'
}],
diagnosticos: [{
    type: Schema.Types.ObjectId,
    ref: 'Diagnostico'
}],
historia: {
    type: Schema.Types.ObjectId,
    ref: 'HistoriasClinica'
},

},
{
    timestamps:true
});

module.exports = Mongoose.model('Paciente', pacienteEsquema);