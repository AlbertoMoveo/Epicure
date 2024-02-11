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
const RestaurantHandler = {
    createRestaurant: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return restaurant_model_1.RestaurantModel
            .create(data);
    }),
    getAllRestaurants: () => __awaiter(void 0, void 0, void 0, function* () {
        return restaurant_model_1.RestaurantModel
            .find({ isActive: { $ne: false } })
            .populate('dishes');
    }),
    getRestaurantById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return restaurant_model_1.RestaurantModel
            .findById(id)
            .populate('dishes');
    }),
    updateRestaurant: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return restaurant_model_1.RestaurantModel
            .findByIdAndUpdate(id, data, { new: true });
    }),
    deleteRestaurant: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return restaurant_model_1.RestaurantModel
            .findByIdAndUpdate(id, { isActive: false }, { new: true });
    }),
    getAllRestaurantsPaginated: (page, restaurantsPerPage) => __awaiter(void 0, void 0, void 0, function* () {
        return restaurant_model_1.RestaurantModel
            .find({ isActive: { $ne: false } })
            .populate('dishes')
            .skip(page * restaurantsPerPage)
            .limit(restaurantsPerPage);
    }),
    getAllRestaurantsAggregate: () => __awaiter(void 0, void 0, void 0, function* () {
        return restaurant_model_1.RestaurantModel
            .aggregate([
            { $match: { isActive: true } },
            {
                $lookup: {
                    from: 'dishes',
                    localField: 'dishes',
                    foreignField: '_id',
                    as: 'dishes',
                },
            },
            {
                $addFields: {
                    dishes: {
                        $filter: {
                            input: '$dishes',
                            as: 'dish',
                            cond: { $eq: ['$$dish.isActive', true] },
                        },
                    },
                },
            },
        ]);
    }),
};
exports.default = RestaurantHandler;
