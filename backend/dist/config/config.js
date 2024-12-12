"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
    port: process.env.PORT || 5000,
};
if (!config.unsplashAccessKey) {
    throw new Error('UNSPLASH_ACCESS_KEY is missing from environment variables');
}
exports.default = config;
