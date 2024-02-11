"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const search_controller_1 = __importDefault(require("../../../../controllers/search.controller"));
const middleware_1 = __importDefault(require("../../../../middleware/middleware"));
const searchRouter = express_1.default.Router();
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
searchRouter.get('/', middleware_1.default, search_controller_1.default.search);
exports.default = searchRouter;
