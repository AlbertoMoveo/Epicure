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
const dish_model_1 = require("../models/dish.model");
const DishHandler = {
    createDish: (data) => __awaiter(void 0, void 0, void 0, function* () { return dish_model_1.DishModel.create(data); }),
    getAllDishes: () => __awaiter(void 0, void 0, void 0, function* () { return dish_model_1.DishModel.find({ isActive: { $ne: false } }); }),
    getDishById: (id) => __awaiter(void 0, void 0, void 0, function* () { return dish_model_1.DishModel.findById(id); }),
    updateDish: (id, data) => __awaiter(void 0, void 0, void 0, function* () { return dish_model_1.DishModel.findByIdAndUpdate(id, data, { new: true }); }),
    deleteDish: (id) => __awaiter(void 0, void 0, void 0, function* () { return dish_model_1.DishModel.findByIdAndUpdate(id, { isActive: false }, { new: true }); }),
};
exports.default = DishHandler;
