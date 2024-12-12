// src/components/ImageGrid.tsx

import React, { useState, memo } from 'react';
import { ImageGridProps } from '../types';
import { Grid, ErrorMessage } from '../styles/ImageGridStyle';
import ImageItem from './ImageItem';

const ImageGrid: React.FC<ImageGridProps> = ({ images, onAnalyze }) => {
  const [imageTags, setImageTags] = useState<{ [key: string]: string[] }>({});
  const [analyzedImages, setAnalyzedImages] = useState<{ [key: string]: boolean }>({});
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (url: string, id: string) => {
    // Prevent re-analyzing images
    if (analyzedImages[id]) return;

    try {
      const tags = await onAnalyze(url, id);
      setImageTags((prev) => ({ ...prev, [id]: tags }));
      setAnalyzedImages((prev) => ({ ...prev, [id]: true }));
    } catch (err) {
      setError('Failed to analyze the image. Please try again.');
      console.error('Error analyzing image:', err);
    }
  };

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Grid>
        {images.map((image) => (
          <ImageItem
            key={image.id}
            image={image}
            onAnalyze={handleAnalyze}
            tags={imageTags[image.id]}
            isAnalyzed={analyzedImages[image.id]}
          />
        ))}
      </Grid>
    </>
  );
};

export default memo(ImageGrid); // Wrap with memo for performance optimization
