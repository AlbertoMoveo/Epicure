import { Router } from 'express';
import v1Router from './version/v1.route';

const apiRouter = Router();

apiRouter.use('/v1', v1Router);

export default apiRouter;