import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import * as Mongoose from "mongoose";
import { AppModule } from './app.module';
import cors from 'cors';

dotenv.config();
import env from './config/env'



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

const {mongoUser,mongoPwd,mongoDb,mongoHost}=env;

Mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPwd}@${mongoHost}/${mongoDb}`,{
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex:true
}).then(
  ()=>{
    bootstrap();
    console.log('Se conecto la base')
  }
).catch(
  (err)=>console.log(err));


