"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_1 = require("mongodb");
;
const dishSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: [{ type: String }],
    tags: [{ type: String }],
    image: { type: String },
    description: { type: String },
    restaurant: { type: mongodb_1.ObjectId, ref: 'Restaurant', required: true },
    isActive: { type: Boolean, default: true }
});
exports.DishModel = mongoose_1.default.model('Dish', dishSchema);
