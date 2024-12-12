import express from 'express';
import cors from 'cors';
import imageRoutes from './routes/imageRoutes';
import { errorHandler } from './middleware/errorHandler';
import config from './config/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', imageRoutes);

// Global error handler
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
