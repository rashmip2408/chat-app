import express from 'express';
import Route from './routes/Routes.js';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Route);

Connection();

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));