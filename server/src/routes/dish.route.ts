import { Router } from 'express';
import DishControllers from '../controllers/dish.controller';

const dishRouter = Router();

dishRouter.post('/', DishControllers.createDish);

dishRouter.get('/', DishControllers.getAllDishes);

dishRouter.get('/:id', DishControllers.getDishById);

dishRouter.put('/:id', DishControllers.updateDish);

dishRouter.delete('/:id', DishControllers.deleteDish);

export default dishRouter;