const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./docs/swagger.config');
const httpErrorMiddleware = require('./middlewares/errorMiddleware');
require('express-async-errors');
const routes = require('./routes');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/', routes);

app.use(httpErrorMiddleware);

app.listen(PORT, () => console.log('ouvindo porta', PORT));
