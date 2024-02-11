"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chef_controller_1 = __importDefault(require("../../../../controllers/chef.controller"));
const middleware_1 = __importDefault(require("../../../../middleware/middleware"));
const chefRouter = (0, express_1.Router)();
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
chefRouter.post('/', middleware_1.default, chef_controller_1.default.createChef);
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
chefRouter.get('/', chef_controller_1.default.getAllChefs);
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
chefRouter.get('/:id', chef_controller_1.default.getChefById);
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
chefRouter.put('/:id', middleware_1.default, chef_controller_1.default.updateChef);
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
chefRouter.delete('/:id', middleware_1.default, chef_controller_1.default.deleteChef);
exports.default = chefRouter;
