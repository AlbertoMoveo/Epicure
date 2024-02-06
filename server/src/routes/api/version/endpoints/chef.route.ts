import { Router } from 'express';
import ChefControllers from '../../../../controllers/chef.controller';
import verifyToken from '../../../../middleware/middleware';

const chefRouter = Router();

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
 * /chefs:
 *   post:
 *     summary: Create a new chef
 *     tags: [Chef]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Chef'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chef'
 */
chefRouter.post('/', verifyToken, ChefControllers.createChef);

/**
 * @swagger
 * /chefs:
 *   get:
 *     summary: Get all chefs
 *     tags: [Chef]
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Chef'
 */
chefRouter.get('/', ChefControllers.getAllChefs);

/**
 * @swagger
 * /chefs/{id}:
 *   get:
 *     summary: Get a chef by ID
 *     tags: [Chef]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chef to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chef'
 */
chefRouter.get('/:id', ChefControllers.getChefById);

/**
 * @swagger
 * /chefs/{id}:
 *   put:
 *     summary: Update a chef by ID
 *     tags: [Chef]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chef to update
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Chef'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chef'
 */
chefRouter.put('/:id', verifyToken, ChefControllers.updateChef);

/**
 * @swagger
 * /chefs/{id}:
 *   delete:
 *     summary: Delete a chef by ID
 *     tags: [Chef]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chef to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chef'
 */
chefRouter.delete('/:id', verifyToken, ChefControllers.deleteChef);

export default chefRouter;
