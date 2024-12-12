import dotenv from 'dotenv';

dotenv.config();

const config = {
    unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
    port: process.env.PORT || 5000,
};

if (!config.unsplashAccessKey) {
    throw new Error('UNSPLASH_ACCESS_KEY is missing from environment variables');
}

export default config;
