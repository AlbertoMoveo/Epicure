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
const chef_model_1 = require("../models/chef.model");
const ChefHandler = {
    createChef: (data) => __awaiter(void 0, void 0, void 0, function* () { return chef_model_1.ChefModel.create(data); }),
    getAllChefs: () => __awaiter(void 0, void 0, void 0, function* () { return chef_model_1.ChefModel.find({ isActive: { $ne: false } }); }),
    getChefById: (id) => __awaiter(void 0, void 0, void 0, function* () { return chef_model_1.ChefModel.findById(id); }),
    updateChef: (id, data) => __awaiter(void 0, void 0, void 0, function* () { return chef_model_1.ChefModel.findByIdAndUpdate(id, data, { new: true }); }),
    deleteChef: (id) => __awaiter(void 0, void 0, void 0, function* () { return chef_model_1.ChefModel.findByIdAndUpdate(id, { isActive: false }, { new: true }); }),
};
exports.default = ChefHandler;
