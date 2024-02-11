"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const v1_route_1 = __importDefault(require("./version/v1.route"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/v1', v1_route_1.default);
exports.default = apiRouter;
