import express from 'express';
import cors from 'cors';

import db from './db';
import routes from './routes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', routes);

db.connect();

export default app;
