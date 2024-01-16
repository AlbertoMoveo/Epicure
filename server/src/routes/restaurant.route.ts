import { Router } from 'express';
import RestaurantControllers from '../controllers/restaurant.controller';

const restaurantRouter = Router();

restaurantRouter.post('/', RestaurantControllers.createRestaurant);

restaurantRouter.get('/', RestaurantControllers.getAllRestaurants);

restaurantRouter.get('/:id', RestaurantControllers.getRestaurantById);

restaurantRouter.put('/:id', RestaurantControllers.updateRestaurant);

restaurantRouter.delete('/:id', RestaurantControllers.deleteRestaurant);

export default restaurantRouter;