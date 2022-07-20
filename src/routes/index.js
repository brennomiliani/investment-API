import express from 'express';
import contaRoutes from './contaRoutes';

const routes = express.Router();

routes.use('/conta', contaRoutes);

export default routes;
