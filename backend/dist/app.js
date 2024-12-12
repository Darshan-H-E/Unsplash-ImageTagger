"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const imageRoutes_1 = __importDefault(require("./routes/imageRoutes"));
const errorHandler_1 = require("./middleware/errorHandler");
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', imageRoutes_1.default);
// Global error handler
app.use(errorHandler_1.errorHandler);
app.listen(config_1.default.port, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});