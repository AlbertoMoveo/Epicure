import { Router } from 'express';
import RestaurantControllers from '../../../../controllers/restaurant.controller';

const restaurantRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Chef:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the chef
 *         image:
 *           type: string
 *           description: URL or path to the chef image
 *         description:
 *           type: string
 *           description: Description of the chef
 *         restaurants:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Restaurant'
 *         isActive:
 *           type: boolean
 *           description: Indicates if the chef is active
 * 
 *     Dish:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the dish
 *         price:
 *           type: number
 *           description: The price of the dish
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of ingredients in the dish
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of tags associated with the dish
 *         restaurant:
 *           $ref: '#/components/schemas/Restaurant'
 *         isActive:
 *           type: boolean
 *           description: Indicates if the dish is active
 * 
 *     Restaurant:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the restaurant
 *         image:
 *           type: string
 *           description: URL or path to the restaurant image
 *         chef:
 *           $ref: '#/components/schemas/Chef'
 *         dishes:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Dish'
 *         isActive:
 *           type: boolean
 *           description: Indicates if the restaurant is active
 */

/**
 * @swagger
 * /restaurants:
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurant]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 */
restaurantRouter.post('/', RestaurantControllers.createRestaurant);

/**
 * @swagger
 * /restaurants:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Restaurant]
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Restaurant'
 */
restaurantRouter.get('/', RestaurantControllers.getAllRestaurants);

/**
 * @swagger
 * /restaurants/{id}:
 *   get:
 *     summary: Get a restaurant by ID
 *     tags: [Restaurant]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 */
restaurantRouter.get('/:id', RestaurantControllers.getRestaurantById);

/**
 * @swagger
 * /restaurants/{id}:
 *   put:
 *     summary: Update a restaurant by ID
 *     tags: [Restaurant]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to update
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 */
restaurantRouter.put('/:id', RestaurantControllers.updateRestaurant);

/**
 * @swagger
 * /restaurants/{id}:
 *   delete:
 *     summary: Delete a restaurant by ID
 *     tags: [Restaurant]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 */
restaurantRouter.delete('/:id', RestaurantControllers.deleteRestaurant);

export default restaurantRouter;