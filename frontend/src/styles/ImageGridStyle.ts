// src/styles/ImageGridStyles.ts

import styled from 'styled-components';

export const Grid = styled.div`
  column-count: 2;
  column-gap: 10px;

  @media (min-width: 768px) {
    column-count: 3;
  }

  @media (min-width: 1024px) {
    column-count: 4;
  }
`;

export const ImageContainer = styled.div`
  break-inside: avoid;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #005bb5;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

export const TagContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  z-index: 2;
`;

export const TagButton = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;
