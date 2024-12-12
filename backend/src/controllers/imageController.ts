import { Request, Response } from 'express';
import axios from 'axios';
import config from '../config/config';
import { UnsplashImage, ImageResponse, AnalyzeRequestBody } from '../models/unsplashTypes';

export const getImages = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=nature&per_page=10`,
            {
                headers: {
                    Authorization: `Client-ID ${config.unsplashAccessKey}`,
                },
            }
        );

        const images: ImageResponse[] = response.data.results.map((img: UnsplashImage) => ({
            id: img.id,
            url: img.urls.small,
        }));

        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images from Unsplash' });
    }
};

export const analyzeImage = (req: Request<{}, {}, AnalyzeRequestBody>, res: Response): void => {
    const { url } = req.body;

    // Mock AI-generated tags
    const tags = ['forest', 'mountain', 'river', 'tree', 'sky'];
    const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, 3);

    res.json({ tags: randomTags });
};
