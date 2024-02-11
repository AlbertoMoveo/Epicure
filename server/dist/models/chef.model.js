"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_1 = require("mongodb");
;
const chefSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    restaurants: [{ type: mongodb_1.ObjectId, ref: 'Restaurant' }],
    isActive: { type: Boolean, default: true }
});
exports.ChefModel = mongoose_1.default.model('Chef', chefSchema);
