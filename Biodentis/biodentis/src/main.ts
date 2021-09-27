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
const express = require('express');
const bodyParse=require('body-parser');

const app = express();

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

const router = express.Router();
app.use('/api',router);
loginRoute(router);

router.get('/', (request, response) => {

  response.send('Hello from home');
});
app.use(router);
app.listen(3000,()=>{
  console.log(`server corriendo`);
});




