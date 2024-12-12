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
exports.analyzeImage = exports.getImages = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config/config"));
const getImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`https://api.unsplash.com/search/photos?query=nature&per_page=10`, {
            headers: {
                Authorization: `Client-ID ${config_1.default.unsplashAccessKey}`,
            },
        });
        const images = response.data.results.map((img) => ({
            id: img.id,
            url: img.urls.small,
        }));
        res.json(images);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching images from Unsplash' });
    }
});
exports.getImages = getImages;
const analyzeImage = (req, res) => {
    const { url } = req.body;
    // Mock AI-generated tags
    const tags = ['forest', 'mountain', 'river', 'tree', 'sky'];
    const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, 3);
    res.json({ tags: randomTags });
};
exports.analyzeImage = analyzeImage;
