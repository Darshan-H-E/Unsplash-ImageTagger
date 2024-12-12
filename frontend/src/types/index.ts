export interface Image {
  id: string;
  url: string;
}

export interface ImageGridProps {
  images: Image[];
  onAnalyze: (url: string, id: string) => Promise<string[]>;
}

export interface ImageItemProps {
  image: Image;
  onAnalyze: (url: string, id: string) => void;
  tags: string[] | undefined;
  isAnalyzed: boolean;
}
