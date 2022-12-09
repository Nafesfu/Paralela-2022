import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import routes from './Routes/Routes.js';
import cors from 'cors';
import { Net } from './Net/Net.js';

dotenv.config();

const app = express();

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '4200';

const __pathArchivos = path.join(Net.Utils.__dirname, '../../archivos');

app.use(cors());
app.use(express.json());
app.use(express.static(__pathArchivos));
app.use(routes());

app.listen(PORT, HOST, ()=>{
    console.log(`Server up... Listen on http://${HOST}:${PORT}`)
})