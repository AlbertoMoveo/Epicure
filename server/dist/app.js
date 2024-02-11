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
const cors_1 = __importDefault(require("cors"));
const swagger_1 = require("./utils/swagger");
const api_route_1 = __importDefault(require("./routes/api/api.route"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(body_parser_1.default.json());
(0, swagger_1.swaggerSetup)(app);
app.use((0, cors_1.default)());
const uri = `${process.env.MONGODB_URI}`;
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('trying to connect to DB');
            yield mongoose_1.default.connect(uri);
            console.log('Connected to MongoDB');
        }
        catch (error) {
            console.log('Error occured while trying to connect to MongoDB');
            console.error(error);
        }
    });
}
app.use('/api', api_route_1.default);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connect();
            const PORT = process.env.PORT || 3001;
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        }
        catch (error) {
            console.error('Error starting server:', error);
        }
    });
}
startServer();
