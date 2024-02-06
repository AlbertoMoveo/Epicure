import express from 'express';

import dishRoutes from './endpoints/dish.route';
import chefRoutes from './endpoints/chef.route';
import restaurantRoutes from './endpoints/restaurant.route';
import searchRoutes from './endpoints/search.route';
import userRoutes from './endpoints/user.route';


const v1Router = express.Router();

v1Router.use('/dishes', dishRoutes);
v1Router.use('/chefs', chefRoutes);
v1Router.use('/restaurants', restaurantRoutes);
v1Router.use('/search', searchRoutes);
v1Router.use('/users', userRoutes);

export default v1Router;