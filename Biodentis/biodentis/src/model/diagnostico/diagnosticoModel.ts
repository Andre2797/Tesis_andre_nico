'use strict'
import mongoose, { Schema } from 'mongoose';
import * as Mongoose from "mongoose";
const diagnosticoEsquema=new Schema({
fecha:{
    type:Date,
    require:true,
    
},
descripcion:{
    type:String,
    require:true,
    max:80
},odontograma: {
    type: Schema.Types.ObjectId,
    ref: 'Odontograma'
}

},
{
    timestamps:true
});

module.exports = Mongoose.model('Diagnostico', diagnosticoEsquema);