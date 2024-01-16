import express from 'express';

import dishRoutes from './dish.route';
import chefRoutes from './chef.route';
import restaurantRoutes from './restaurant.route';
import searchRoutes from './search.route';

const v1Router = express.Router();

v1Router.use('/dishes', dishRoutes);
v1Router.use('/chefs', chefRoutes);
v1Router.use('/restaurants', restaurantRoutes);
v1Router.use('/search', searchRoutes);

export default v1Router;