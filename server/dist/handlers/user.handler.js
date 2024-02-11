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
const user_model_1 = require("../models/user.model");
const userHandler = {
    createUser: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const encryptedPassword = Buffer.from(data.password).toString('base64');
        return user_model_1.UserModel.create(Object.assign(Object.assign({}, data), { password: encryptedPassword }));
    }),
    getAllUseres: () => __awaiter(void 0, void 0, void 0, function* () { return user_model_1.UserModel.find({ isActive: { $ne: false } }); }),
    getUserById: (id) => __awaiter(void 0, void 0, void 0, function* () { return user_model_1.UserModel.findById(id); }),
    getUserByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () { return user_model_1.UserModel.findOne({ email: email }); }),
    checkPassword: (email, password) => __awaiter(void 0, void 0, void 0, function* () { return user_model_1.UserModel.findOne({ email: email }); }),
    updateUser: (id, data) => __awaiter(void 0, void 0, void 0, function* () { return user_model_1.UserModel.findByIdAndUpdate(id, data, { new: true }); }),
    deleteUser: (id) => __awaiter(void 0, void 0, void 0, function* () { return user_model_1.UserModel.findByIdAndUpdate(id, { isActive: false }, { new: true }); }),
};
exports.default = userHandler;
