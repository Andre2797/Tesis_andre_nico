'use strict'
import mongoose, { Schema } from 'mongoose';
import * as Mongoose from "mongoose";
const odontogramaEsquema=new Schema({
hemiarcadaSuperiorDerecha:{
pieza21:{
zona:{
    type:String,
        require:true,
        max:30,
    diagPieza:{
        type:String,
        require:true,
        max:30
    }
}
}
},

diagnostico: {
    type: Schema.Types.ObjectId,
    ref: 'Diagnostico'
}

},
{
    timestamps:true
});

module.exports = Mongoose.model('Odontograma', odontogramaEsquema);