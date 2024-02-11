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
const restaurant_handler_1 = __importDefault(require("../handlers/restaurant.handler"));
const RestaurantController = {
    createRestaurant: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newRestaurant = yield restaurant_handler_1.default.createRestaurant(req.body);
            return res.status(200).json(newRestaurant);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getAllRestaurants: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const restaurants = yield restaurant_handler_1.default.getAllRestaurants();
            if (restaurants.length === 0) {
                return res.status(404).json({ error: 'No active restaurants found in DB' });
            }
            return res.status(200).json(restaurants);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getAllRestaurantsByRating: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const restaurants = yield restaurant_handler_1.default.getAllRestaurants();
            if (restaurants.length === 0) {
                return res.status(404).json({ error: 'No active restaurants found in DB' });
            }
            const sortedRestaurants = restaurants.sort((a, b) => b.rating - a.rating);
            return res.status(200).json(sortedRestaurants);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getAllRestaurantsPaginated: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let page = typeof req.query.p === 'string' ? parseInt(req.query.p, 10) : 0;
            const restaurantsPerPage = 3;
            const restaurants = yield restaurant_handler_1.default.getAllRestaurantsPaginated(page, restaurantsPerPage);
            if (restaurants.length === 0) {
                return res.status(404).json({ error: 'No active restaurants found in DB' });
            }
            return res.status(200).json(restaurants);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getRestaurantById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const restaurant = yield restaurant_handler_1.default.getRestaurantById(req.params.id);
            if (!restaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }
            return res.status(200).json(restaurant);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    updateRestaurant: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedRestaurant = yield restaurant_handler_1.default.updateRestaurant(req.params.id, req.body);
            if (!updatedRestaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }
            return res.status(200).json(updatedRestaurant);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    deleteRestaurant: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deletedRestaurant = yield restaurant_handler_1.default.deleteRestaurant(req.params.id);
            if (!deletedRestaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }
            return res.status(200).json(deletedRestaurant);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    })
};
exports.default = RestaurantController;
