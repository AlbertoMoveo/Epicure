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
const express_1 = require("express");
const chef_model_1 = require("../models/chef.model");
const router = (0, express_1.Router)();
// Create a new chef
router.post('/chefs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newChef = yield chef_model_1.ChefModel.create(req.body);
        res.json(newChef);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Get all chefs 
router.get('/chefs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chefs = yield chef_model_1.ChefModel.find();
        res.json(chefs);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Get a single chef by ID
router.get('/chefs/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chef = yield chef_model_1.ChefModel.findById(req.params.id);
        if (!chef) {
            return res.status(404).json({ error: 'Chef not found' });
        }
        res.json(chef);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Update a chef by ID
router.put('/chefs/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedChef = yield chef_model_1.ChefModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedChef) {
            return res.status(404).json({ error: 'Chef not found' });
        }
        res.json(updatedChef);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Delete a chef by ID
router.delete('/chefs/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedChef = yield chef_model_1.ChefModel.findByIdAndDelete(req.params.id);
        if (!deletedChef) {
            return res.status(404).json({ error: 'Chef not found' });
        }
        res.json(deletedChef);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
