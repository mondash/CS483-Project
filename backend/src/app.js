import express from 'express';
import bodyParser from 'body-parser';

import *  as db from './db';
import routes from './routes/index.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

db.connect();

export default app;
