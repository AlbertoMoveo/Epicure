"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dish_handler_1 = __importDefault(require("../handlers/dish.handler"));
const DishControllers = {
    createDish: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newDish = yield dish_handler_1.default.createDish(req.body);
            return res.status(200).json(newDish);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getAllDishes: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const dishes = yield dish_handler_1.default.getAllDishes();
            if (dishes.length === 0) {
                return res.status(404).json({ error: 'No active dishes found in DB' });
            }
            return res.status(200).json(dishes);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getDishById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const dish = yield dish_handler_1.default.getDishById(req.params.id);
            if (!dish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            return res.status(200).json(dish);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    updateDish: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedDish = yield dish_handler_1.default.updateDish(req.params.id, req.body);
            if (!updatedDish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            return res.status(200).json(updatedDish);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    deleteDish: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deletedDish = yield dish_handler_1.default.deleteDish(req.params.id);
            if (!deletedDish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            return res.status(200).json(deletedDish);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    })
};
exports.default = DishControllers;
