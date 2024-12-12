# Samwell AI Image Tagger
This is a full-stack application consisting of a backend built with Express and TypeScript and a frontend built using Next.js and React. The backend fetches images from Unsplash and analyzes them for mock AI-generated tags. The frontend fetches images from the backend and displays them, with the option to analyze images for tags.

## Backend

The backend exposes two API endpoints:
- **GET /images**: Fetches 10 images from Unsplash based on the keyword "nature".
- **POST /analyze**: Accepts an image URL and returns mock AI-generated tags.

### Prerequisites

- Node.js (version 16 or above)
- TypeScript
- Axios for HTTP requests
- dotenv for environment variable management
- CORS for enabling cross-origin resource sharing
- Express for creating the API
- Unsplash API key (to fetch images)

### Installation

1. Clone the repository.

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Set up environment variables in a `.env` file (located in the backend directory):
   
   Add your Unsplash API key to `.env`:
   
   ```plaintext
   UNSPLASH_API_KEY=your-unsplash-api-key
   ```

4. Start the backend server:

```bash
npm run dev
```

### API Endpoints

- **GET /images**: Fetches 10 images from Unsplash based on the keyword "nature".
  - **Example Request**: `GET /images`
  - **Example Response**:
    ```json
    [
      {
        "url": "https://unsplash.com/photo-12345",
        "alt": "A scenic view of mountains"
      },
      ...
    ]
    ```

- **POST /analyze**: Accepts an image URL and returns mock AI-generated tags.
  - **Example Request**: 
    ```json
    {
      "imageUrl": "https://unsplash.com/photo-12345"
    }
    ```
  - **Example Response**:
    ```json
    {
      "tags": ["forest", "mountain", "nature"]
    }
    ```

### Available Scripts

- `start`: Transpiles TypeScript code and starts the API server.

```bash
npm start
```

- `dev`: Starts the application in development mode with `nodemon` for live reloading.

```bash
npm run dev
```

### Dependencies

- `axios`: For making HTTP requests.
- `cors`: For handling cross-origin requests.
- `dotenv`: For loading environment variables.
- `express`: Web framework for Node.js.

---

## Frontend

The frontend fetches images from the `/images` endpoint of the backend and displays them in a simple grid. Each image has an "Analyze Image" button that sends the image URL to the `/analyze` endpoint to receive mock AI-generated tags and displays them below the image.

### Prerequisites

- Node.js (version 16 or above)
- Next.js for server-side rendering
- React and React DOM for building the user interface
- Styled-components for styling

### Installation

1. Clone the repository.

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Start the frontend development server:

```bash
npm run dev
```

### Available Scripts

- `dev`: Starts the frontend application in development mode using Next.js with Turbopack for faster builds.

```bash
npm run dev
```

- `build`: Builds the application for production.

```bash
npm run build
```

- `start`: Starts the Next.js application in production mode.

```bash
npm start
```

- `lint`: Runs ESLint to check for linting issues.

```bash
npm run lint
```

### Dependencies

- `axios`: For making HTTP requests.
- `next`: The React framework for server-side rendering.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `styled-components`: For styling components.