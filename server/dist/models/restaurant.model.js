"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_1 = require("mongodb");
;
const restaurantSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    chef: { type: mongodb_1.ObjectId, ref: 'Chef', required: true },
    chefName: { type: String, required: true },
    dishes: [{ type: mongodb_1.ObjectId, ref: 'Dish' }],
    isActive: { type: Boolean, default: true }
});
exports.RestaurantModel = mongoose_1.default.model('Restaurant', restaurantSchema);
