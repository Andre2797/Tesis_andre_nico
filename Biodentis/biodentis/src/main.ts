'use strict'
import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import * as Mongoose from "mongoose";
import { AppModule } from './app.module';
import cors from 'cors';

dotenv.config();
import env from './config/env'
import { request, response } from 'express';


const { mongoUser, mongoPwd, mongoDb, mongoHost } = env;

Mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPwd}@${mongoHost}/${mongoDb}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  () => {
    //bootstrap();
    console.log('Se conecto la base')
  }
).catch(
  (err) => console.log(err));

const loginRoute = require('./routes/login/loginRoute');
const sucuRoute=require('./routes/sucursales/sucursalesRoute');
const citaRoute=require('./routes/cita/citaRoute');
const pacienteRoute=require('./routes/paciente/pacienteRoute');
const diagnosticoRoute=require('./routes/diagnostico/diagnosticoRoute');
const historiaClinicaRoute=require('./routes/historiaClinica/historiaClinicaRoute');
const odontogramaRoute=require('./routes/odontograma/odontogramaRouter');
const recetaRoute=require('./routes/receta/recetaRoute');
const tratamientoRoute=require('./routes/tratamiento/tratamientoRoute');


const express = require('express');
const bodyParse=require('body-parser');

const app = express();

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

const router = express.Router();
app.use('/api',router);
loginRoute(router);
sucuRoute(router);
citaRoute(router);
pacienteRoute(router);
diagnosticoRoute(router);
historiaClinicaRoute(router);
odontogramaRoute(router);
recetaRoute(router);
tratamientoRoute(router);

router.get('/', (request, response) => {

  response.send('Hello from home');
});
app.use(router);
app.listen(3000,()=>{
  console.log(`server corriendo`);
});




