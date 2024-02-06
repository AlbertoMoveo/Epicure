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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const chef_route_1 = __importDefault(require("./routes/chef.route"));
const restaurant_route_1 = __importDefault(require("./routes/restaurant.route"));
const dish_route_1 = __importDefault(require("./routes/dish.route"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(body_parser_1.default.json());
const uri = `${process.env.MONGODB_URI}`;
console.log('MongoDB URI:', uri);
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('trying to connect');
            yield mongoose_1.default.connect(uri);
            console.log('Connected to MongoDB');
        }
        catch (error) {
            console.error(error);
        }
    });
}
// Routes
app.use('/api', chef_route_1.default);
app.use('/api', restaurant_route_1.default);
app.use('/api', dish_route_1.default);
// Start server
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connect();
            const PORT = process.env.PORT || 3001;
            app.listen(PORT, () => {
                console.log(`SSServer is running on port ${PORT}`);
            });
        }
        catch (error) {
            console.error('Error starting server:', error);
        }
    });
}
startServer();
