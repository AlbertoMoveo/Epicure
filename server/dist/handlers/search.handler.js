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
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_model_1 = require("../models/restaurant.model");
const chef_model_1 = require("../models/chef.model");
const dish_model_1 = require("../models/dish.model");
const SearchHandler = {
    search: (query) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [restaurantMatches, chefMatches, dishMatches] = yield Promise.all([
                restaurant_model_1.RestaurantModel.find({ name: { $regex: new RegExp(query, 'i') }, isActive: true }),
                chef_model_1.ChefModel.find({ name: { $regex: new RegExp(query, 'i') }, isActive: true }),
                dish_model_1.DishModel.find({ name: { $regex: new RegExp(query, 'i') }, isActive: true }),
            ]);
            return {
                restaurants: restaurantMatches,
                chefs: chefMatches,
                dishes: dishMatches,
            };
        }
        catch (error) {
            console.error('Error in SearchHandler:', error);
            throw error;
        }
    }),
};
exports.default = SearchHandler;
