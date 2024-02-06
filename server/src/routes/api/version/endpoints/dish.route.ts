import { Router } from 'express';
import DishControllers from '../../../../controllers/dish.controller';
import verifyToken from '../../../../middleware/middleware';

const dishRouter = Router();

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
 *         restaurantID:
 *              type: number
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
 * /dishes:
 *   post:
 *     summary: Create a new dish
 *     tags: [Dish]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dish'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dish'
 */
dishRouter.post('/', verifyToken, DishControllers.createDish);

/**
 * @swagger
 * /dishes:
 *   get:
 *     summary: Get all dishes
 *     tags: [Dish]
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dish'
 */
dishRouter.get('/', DishControllers.getAllDishes);

/**
 * @swagger
 * /dishes/{id}:
 *   get:
 *     summary: Get a dish by ID
 *     tags: [Dish]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the dish to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dish'
 */
dishRouter.get('/:id', DishControllers.getDishById);

/**
 * @swagger
 * /dishes/{id}:
 *   put:
 *     summary: Update a dish by ID
 *     tags: [Dish]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the dish to update
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dish'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dish'
 */
dishRouter.put('/:id', verifyToken, DishControllers.updateDish);

/**
 * @swagger
 * /dishes/{id}:
 *   delete:
 *     summary: Delete a dish by ID
 *     tags: [Dish]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the dish to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dish'
 */
dishRouter.delete('/:id', verifyToken, DishControllers.deleteDish);

export default dishRouter;