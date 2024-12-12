// src/components/ImageItem.tsx

import React from 'react';
import { ImageItemProps } from '../types';
import { ImageContainer, Button, TagContainer, TagButton, StyledImage } from '../styles/ImageGridStyle';

const ImageItem: React.FC<ImageItemProps> = ({ image, onAnalyze, tags, isAnalyzed }) => {
  return (
    <ImageContainer>
      <Button
        onClick={() => onAnalyze(image.url, image.id)}
        aria-label={`Analyze image ${image.id}`}
        disabled={isAnalyzed}
      >
        {isAnalyzed ? 'Analyzed' : 'Analyze Image'}
      </Button>

      {tags && (
        <TagContainer>
          {tags.map((tag, index) => (
            <TagButton key={index}>{tag}</TagButton>
          ))}
        </TagContainer>
      )}

      <StyledImage src={image.url} alt={`Image ${image.id}`} />
    </ImageContainer>
  );
};

export default ImageItem;
