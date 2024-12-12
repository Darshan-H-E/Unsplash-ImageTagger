import { Router } from 'express';
import { getImages, analyzeImage } from '../controllers/imageController';

const router = Router();

router.get('/images', getImages);
router.post('/analyze', analyzeImage);

export default router;
