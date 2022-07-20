import 'dotenv/config';
import express from 'express';
import routes from './routes/index';

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => console.log('ouvindo porta', PORT));
