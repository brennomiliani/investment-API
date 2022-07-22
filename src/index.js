const express = require('express');
const httpErrorMiddleware = require('./middlewares/errorMiddleware');
require('express-async-errors');
const routes = require('./routes');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use('/', routes);

app.use(httpErrorMiddleware);

app.listen(PORT, () => console.log('ouvindo porta', PORT));
