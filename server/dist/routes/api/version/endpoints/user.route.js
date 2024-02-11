"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../../../../controllers/user.controller"));
const middleware_1 = __importDefault(require("../../../../middleware/middleware"));
const userRouter = (0, express_1.Router)();
userRouter.post('/', middleware_1.default, user_controller_1.default.createUser);
userRouter.get('/', middleware_1.default, user_controller_1.default.getAllUsers);
userRouter.get('/:id', middleware_1.default, user_controller_1.default.getUserById);
userRouter.get('/email/:email', middleware_1.default, user_controller_1.default.getUserByEmail);
userRouter.post('/check-password', user_controller_1.default.checkPassword);
userRouter.put('/:id', middleware_1.default, user_controller_1.default.updateUser);
userRouter.delete('/:id', middleware_1.default, user_controller_1.default.deleteUser);
exports.default = userRouter;
