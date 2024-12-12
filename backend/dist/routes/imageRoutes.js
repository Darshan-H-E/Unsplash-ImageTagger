"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageController_1 = require("../controllers/imageController");
const router = (0, express_1.Router)();
router.get('/images', imageController_1.getImages);
router.post('/analyze', imageController_1.analyzeImage);
exports.default = router;
