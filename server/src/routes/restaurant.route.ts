import { Router } from 'express';
import RestaurantHandlers from '../handlers/restaurant.handler';

const router = Router();

router.post('/restaurants', RestaurantHandlers.createRestaurant);

router.get('/restaurants', RestaurantHandlers.getAllRestaurants);

router.get('/restaurants/:id', RestaurantHandlers.getRestaurantById);

router.put('/restaurants/:id', RestaurantHandlers.updateRestaurant);

router.delete('/restaurants/:id', RestaurantHandlers.deleteRestaurant);

export default router;