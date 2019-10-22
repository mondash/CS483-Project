import fs from 'fs';
import https from 'https';
import dotenv from 'dotenv';

import app from './app';

dotenv.config();

const port = process.env.PORT || '3000';
const useSSL = false;
const key = fs.readFileSync(process.env.KEY);
const cert = fs.readFileSync(process.env.CERT);

const server =
    useSSL ? https.createServer({ key, cert}, app) : app;

server.listen(port, () => {
    console.log(`Backend listening on port ${port}...`);
});
