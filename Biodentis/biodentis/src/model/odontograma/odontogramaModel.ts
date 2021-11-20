'use strict'
import mongoose, { Schema } from 'mongoose';
import * as Mongoose from "mongoose";
const odontogramaEsquema = new Schema({


    diagnostico: {
        type: String,
        ref: 'Diagnostico'
    },
    pieza: [{
        type: Schema.Types.ObjectId,
        ref: 'Pieza'
    }],



},
    {
        timestamps: true
    });

module.exports = Mongoose.model('Odontograma', odontogramaEsquema);