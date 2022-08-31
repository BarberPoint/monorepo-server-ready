import { Router } from 'express';
import tryCatch from '@src/utils/try-catch';
import example from '@src/controllers/example.controller';
const routes = Router();

routes.get('/', tryCatch(example.successExample));
routes.get('/error', tryCatch(example.errorExample));

export default routes;
