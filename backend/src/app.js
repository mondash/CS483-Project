import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import routes from './routes/index.js';

dotenv.config();

const dbString =
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSWD}@${process.env.DB_HOST}`;
const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// TODO gracefully handle connection error
mongoose.connect(dbString, dbConfig)
    .catch(err => {
        console.log('Could not connect to database');
        console.log(err.stack);
        process.exit(1);
    });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 404 Page not Found Error
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// 500 Internal Server Error
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(`Internal server error: ${err}`);
    next();
})

routes(app);

export default app;
