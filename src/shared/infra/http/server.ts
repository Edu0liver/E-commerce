import 'reflect-metadata';
import express from 'express';
import { routes } from './routes';
import "../../container";
import "../typeorm";

const app = express();

app.use(routes);

app.listen(3333, ()=> console.log('Server is Running !'));