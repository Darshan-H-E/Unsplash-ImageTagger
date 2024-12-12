const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// Endpoint to fetch images
app.get('/images', async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=nature&per_page=10`,
            {
                headers: {
                    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
                },
            }
        );
        const images = response.data.results.map(img => ({
            id: img.id,
            url: img.urls.small,
        }));
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images from Unsplash' });
    }
});

// Endpoint to analyze image
app.post('/analyze', (req, res) => {
    const { url } = req.body;

    // Mock AI-generated tags
    const tags = ['forest', 'mountain', 'river', 'tree', 'sky'];
    const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, 3);

    res.json({ tags: randomTags });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
