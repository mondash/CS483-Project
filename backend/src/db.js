import mongoose from 'mongoose';

const dbString = process.env.DB_HOST;
const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

export const connect = () => {
    mongoose
        .connect(dbString, dbConfig)
        .then(() => console.log('Connected to database'))
        .catch(err => {
            console.log('Could not connect to database');
            console.log(err.stack);
            process.exit(1);
        });
};
