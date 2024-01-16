import { Router } from 'express';
import ChefControllers from '../controllers/chef.controller';

const chefRouter = Router();

chefRouter.post('/', ChefControllers.createChef);

chefRouter.get('/', ChefControllers.getAllChefs);

chefRouter.get('/:id', ChefControllers.getChefById);

chefRouter.put('/:id', ChefControllers.updateChef);

chefRouter.delete('/:id', ChefControllers.deleteChef);

export default chefRouter;
