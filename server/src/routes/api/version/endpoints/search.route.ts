import express, { Router } from 'express';
import SearchController from '../../../../controllers/search.controller';
import verifyToken from '../../../../middleware/middleware';

const searchRouter: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Search
 *   description: Operations related to search
 */

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search for restaurants, chefs, and dishes by name
 *     tags: [Search]
 *     parameters:
 *       - name: q
 *         in: query
 *         description: Search query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 restaurants:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Restaurant'
 *                 chefs:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Chef'
 *                 dishes:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Dish'
 */
searchRouter.get('/', verifyToken, SearchController.search);

export default searchRouter;
