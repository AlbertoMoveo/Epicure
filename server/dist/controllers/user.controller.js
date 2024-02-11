"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const user_handler_1 = __importDefault(require("../handlers/user.handler"));
const jwt = __importStar(require("jsonwebtoken"));
const secretKey = `${process.env.SECRET_KEY}`;
const userControllers = {
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newUser = yield user_handler_1.default.createUser(req.body);
            return res.status(200).json(newUser);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const useres = yield user_handler_1.default.getAllUseres();
            if (useres.length === 0) {
                return res.status(404).json({ error: 'No active useres found in DB' });
            }
            return res.status(200).json(useres);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getUserById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_handler_1.default.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getUserByEmail: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_handler_1.default.getUserByEmail(req.params.email);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    checkPassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield user_handler_1.default.checkPassword(email, password);
            if (!user || password !== user.password) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }
            const token = jwt.sign({ email: user.email, userID: user._id }, secretKey, { expiresIn: '1h' });
            return res.status(200).json({ token });
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedUser = yield user_handler_1.default.updateUser(req.params.id, req.body);
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(updatedUser);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deletedUser = yield user_handler_1.default.deleteUser(req.params.id);
            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(deletedUser);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    })
};
exports.default = userControllers;
