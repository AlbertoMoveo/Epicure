import { Router } from 'express';
import ChefHandlers from '../handlers/chef.handler';

const router = Router();

router.post('/chefs', ChefHandlers.createChef);

router.get('/chefs', ChefHandlers.getAllChefs);

router.get('/chefs/:id', ChefHandlers.getChefById);

router.put('/chefs/:id', ChefHandlers.updateChef);

router.delete('/chefs/:id', ChefHandlers.deleteChef);

export default router;
