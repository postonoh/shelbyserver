import express from 'express';

import middlewaresConfig from './config/middlewares';

import './config/db';

import { CustomerRoutes } from './modules'

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
    res.send('Welecome')
})

app.use('/api/v1/customers', CustomerRoutes);

app.listen(3000, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('I am', 'listening on port 3000');
    }
})