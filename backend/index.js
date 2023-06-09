import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/Route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use('/', Route)

const PORT=8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

// express server
// listen function takes 2 arguments: 1st arg is PORT no, 2nd arg it takes a callback function

Connection(username, password);
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));

DefaultData();