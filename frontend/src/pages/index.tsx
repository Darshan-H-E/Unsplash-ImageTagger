// frontend/pages/index.tsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ImageGrid from '../components/ImageGrid';
import GlobalStyle from '../styles/GlobalStyle';
import { Image } from '../types';

const Home: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Using environment variable for API URL
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get<Image[]>(`${apiBaseUrl}/images`);
        setImages(response.data);
      } catch (err) {
        setError('Failed to fetch images.');
        console.error('Error fetching images:', err);
      }
    };

    fetchImages();
  }, [apiBaseUrl]);

  const analyzeImage = useCallback(
    async (url: string, id: string): Promise<string[]> => {
      try {
        setLoading(true);
        setError(null); // Reset error state before new request
        const response = await axios.post<{ tags: string[] }>(
          `${apiBaseUrl}/analyze`,
          { url }
        );
        return response.data.tags;
      } catch (err) {
        setError('Failed to analyze image.');
        console.error('Error analyzing image:', err);
        return [];
      } finally {
        setLoading(false);
      }
    },
    [apiBaseUrl]
  );

  return (
    <>
      <GlobalStyle />

      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading-message">Analyzing...</p>}

      <ImageGrid images={images} onAnalyze={analyzeImage} />
    </>
  );
};

export default Home;
