export interface UnsplashImage {
    id: string;
    urls: {
        small: string;
    };
}

export interface ImageResponse {
    id: string;
    url: string;
}

export interface AnalyzeRequestBody {
    url: string;
}
