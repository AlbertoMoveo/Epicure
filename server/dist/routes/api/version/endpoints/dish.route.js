"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dish_controller_1 = __importDefault(require("../../../../controllers/dish.controller"));
const middleware_1 = __importDefault(require("../../../../middleware/middleware"));
const dishRouter = (0, express_1.Router)();
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
dishRouter.post('/', middleware_1.default, dish_controller_1.default.createDish);
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
dishRouter.get('/', dish_controller_1.default.getAllDishes);
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
dishRouter.get('/:id', dish_controller_1.default.getDishById);
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
dishRouter.put('/:id', middleware_1.default, dish_controller_1.default.updateDish);
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
dishRouter.delete('/:id', middleware_1.default, dish_controller_1.default.deleteDish);
exports.default = dishRouter;
