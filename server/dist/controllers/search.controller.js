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
const search_handler_1 = __importDefault(require("../handlers/search.handler"));
const SearchController = {
    search: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const query = req.query.q;
            if (!query) {
                return res.status(400).json({ error: 'Bad Request - Missing query parameter' });
            }
            const searchResults = yield search_handler_1.default.search(query);
            return res.status(200).json(searchResults);
        }
        catch (error) {
            console.error('Error in search:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
};
exports.default = SearchController;
