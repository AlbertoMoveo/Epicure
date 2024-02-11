"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dish_route_1 = __importDefault(require("./endpoints/dish.route"));
const chef_route_1 = __importDefault(require("./endpoints/chef.route"));
const restaurant_route_1 = __importDefault(require("./endpoints/restaurant.route"));
const search_route_1 = __importDefault(require("./endpoints/search.route"));
const user_route_1 = __importDefault(require("./endpoints/user.route"));
const v1Router = express_1.default.Router();
v1Router.use('/dishes', dish_route_1.default);
v1Router.use('/chefs', chef_route_1.default);
v1Router.use('/restaurants', restaurant_route_1.default);
v1Router.use('/search', search_route_1.default);
v1Router.use('/users', user_route_1.default);
exports.default = v1Router;
