'use strict'
import mongoose, { Schema } from 'mongoose';
import * as Mongoose from "mongoose";
const citaEsquema=new Schema({
fecha:{
    type:Date,
    require:true,
    
},
hora:{
    type:String,
    require:true,
    max:30
},
motivo:{
    type:String,
    max:80,
    require:false,
},
paciente:{
    type: String,
    max:100,
    require:true
}

},
{
    timestamps:true
});

module.exports = Mongoose.model('Cita', citaEsquema);