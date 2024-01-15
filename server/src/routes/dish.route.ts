import { Router } from 'express';
import DishHandlers from '../handlers/dish.handler';

const router = Router();

router.post('/dishes', DishHandlers.createDish);

router.get('/dishes', DishHandlers.getAllDishes);

router.get('/dishes/:id', DishHandlers.getDishById);

router.put('/dishes/:id', DishHandlers.updateDish);

router.delete('/dishes/:id', DishHandlers.deleteDish);

export default router;