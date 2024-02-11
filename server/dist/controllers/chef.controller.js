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
const chef_handler_1 = __importDefault(require("../handlers/chef.handler"));
const ChefController = {
    createChef: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newChef = yield chef_handler_1.default.createChef(req.body);
            return res.status(200).json(newChef);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getAllChefs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const chefs = yield chef_handler_1.default.getAllChefs();
            if (chefs.length === 0) {
                return res.status(404).json({ error: 'No active chefs in DB' });
            }
            return res.status(200).json(chefs);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getChefById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const chef = yield chef_handler_1.default.getChefById(req.params.id);
            if (!chef) {
                return res.status(404).json({ error: 'Chef not found' });
            }
            return res.status(200).json(chef);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    updateChef: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedChef = yield chef_handler_1.default.updateChef(req.params.id, req.body);
            if (!updatedChef) {
                return res.status(404).json({ error: 'Chef not found' });
            }
            return res.status(200).json(updatedChef);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    deleteChef: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deletedChef = yield chef_handler_1.default.deleteChef(req.params.id);
            if (!deletedChef) {
                return res.status(404).json({ error: 'Chef not found' });
            }
            return res.status(200).json(deletedChef);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    })
};
exports.default = ChefController;
