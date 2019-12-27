import mongoose from 'mongoose';

import { DB_URL } from '../constants';

mongoose.Promise = global.Promise;

mongoose.set('debug', true)

try {
    DB_URL, {
        useNewUrlParser: true,
    }

} catch (error) {
    mongoose.createconnection(DB_URL, {
        useNewUrlParser: true,
    })
}

mongoose.connection
    .once('open', () => console.log('MongoDB is running'))
    .on('error', e => {
        throw e;
    });