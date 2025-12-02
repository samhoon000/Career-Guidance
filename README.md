# EduApp

> A comprehensive full-stack educational platform with AI-powered learning assistance, interactive quizzes, mentoring system, and peer-to-peer communication.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

**EduApp** is a modern, full-stack educational platform designed to provide comprehensive learning experiences across multiple career tracks. The platform combines AI-powered assistance, interactive quizzes, mentoring capabilities, and real-time peer-to-peer communication to create an engaging learning ecosystem.

### Key Capabilities

- **AI-Powered Learning Assistant**: Get instant help with career and educational questions using Groq LLM
- **Interactive Quiz Generator**: Automatically generate quizzes from YouTube video transcripts
- **Mentoring System**: Connect students with experienced mentors in various domains
- **Peer-to-Peer Communication**: Real-time chat and collaboration features
- **Progress Tracking**: Monitor learning progress across multiple career tracks
- **Multi-Career Tracks**: Support for Data Analyst, Data Scientist, Cloud Engineer, ML Engineer, and Big Data Engineer paths

## ✨ Features

### Core Features

- 🔐 **Authentication & Authorization**
  - JWT-based secure authentication
  - User registration and login
  - Protected routes and API endpoints

- 🤖 **AI Notes Assistant**
  - Powered by Groq LLM (Llama 3.1 8B Instant)
  - Educational and career-focused responses
  - Context-aware assistance

- 📝 **Quiz Generation**
  - YouTube transcript extraction
  - Automatic MCQ generation from video content
  - Groq-powered question creation

- 👥 **Mentoring System**
  - Mentor search and filtering
  - Domain-based mentor discovery
  - Mentor request management
  - Real-time notifications via Socket.io

- 💬 **Peer-to-Peer Communication**
  - WebRTC-based P2P chat
  - Multi-tab support
  - Chat history persistence
  - Real-time signaling server

- 📊 **Progress Tracking**
  - Video completion tracking
  - Quiz completion and scoring
  - Module unlock system
  - Progress visualization

- 🎓 **Career Tracks**
  - Data Analyst
  - Data Scientist
  - Cloud Engineer
  - ML Engineer
  - Big Data Engineer

## 🛠 Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **shadcn/ui** - Component system
- **TanStack React Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form handling
- **Zod 3.25.76** - Schema validation

### Backend Services

#### Node.js Services
- **Express 5.1.0** - Web framework (Login/Auth backend)
- **Express 4.19.2** - Web framework (Groq backend)
- **Express 4.18.2** - Web framework (Mentoring backend)
- **MongoDB/Mongoose 9.0.0** - Database and ODM
- **Socket.io 4.8.1** - Real-time communication
- **JWT (jsonwebtoken 9.0.2)** - Authentication
- **bcryptjs 3.0.3** - Password hashing
- **Helmet 6.0.0** - Security headers
- **Joi 17.9.0** - Request validation
- **express-rate-limit** - Rate limiting

#### Python Service
- **Flask 3.1.2** - Web framework (Quiz backend)
- **Flask-CORS 6.0.1** - CORS handling
- **Groq SDK 0.36.0** - Groq API integration
- **youtube-transcript-api 0.6.2** - YouTube transcript extraction

### Infrastructure
- **MongoDB Atlas** - Cloud database
- **Render** - Deployment platform
- **Groq API** - LLM service

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend (React)                        │
│                    (Vite + TypeScript + Tailwind)               │
└────────────┬──────────────┬──────────────┬──────────────┬───────┘
             │              │              │              │
             ▼              ▼              ▼              ▼
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
    │ Login Backend│ │Groq Backend  │ │Mentoring     │ │  P2P Backend │
    │  (Express)   │ │  (Express)   │ │  Backend     │ │  (Express)   │
    │              │ │              │ │  (Express)   │ │              │
    │ Port: 5000   │ │ Port: 3001   │ │ Port: 5001   │ │ Port: 3000   │
    └──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └──────┬───────┘
           │                │                 │                 │
           │                │                 │                 │
           ▼                ▼                 ▼                 │
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │
    │   MongoDB    │ │   Groq API   │ │   MongoDB    │         │
    │   (Atlas)    │ │   (LLM)      │ │   (Atlas)    │         │
    └──────────────┘ └──────────────┘ └──────────────┘         │
                                                               │
┌──────────────────────────────────────────────────────────────┘
│                    Quiz Backend (Flask)                      │
│                    Port: 5002                                │
└──────────────┬───────────────────────────────────────────────┘
               │
               ▼
        ┌──────────────┐
        │  Groq API   │
        │  (LLM)      │
        └──────────────┘
```

### Service Communication Flow

1. **Frontend → Login Backend**: Authentication, user registration, progress tracking
2. **Frontend → Groq Backend**: AI assistant queries for educational help
3. **Frontend → Mentoring Backend**: Mentor search, requests, real-time notifications
4. **Frontend → P2P Backend**: WebRTC signaling, chat history
5. **Frontend → Quiz Backend**: YouTube URL → Quiz generation
6. **Quiz Backend → Groq API**: Transcript → MCQ generation
7. **Groq Backend → Groq API**: Educational assistant responses

## 📁 Project Structure

```
EduApp/
├── src/                          # Frontend source code
│   ├── components/               # React components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── shared/              # Shared components
│   │   └── ...                  # Feature components
│   ├── pages/                   # Page components
│   ├── hooks/                   # Custom React hooks
│   ├── data/                    # Static data files
│   ├── api/                     # API configuration
│   └── lib/                     # Utility functions
│
├── backend/                     # Login/Auth Backend (Node.js)
│   ├── config/                  # Database configuration
│   ├── controllers/             # Route controllers
│   ├── models/                  # MongoDB models
│   ├── routes/                  # API routes
│   ├── middleware/              # Auth middleware
│   └── server.js                # Entry point
│
├── groq_backend/                # AI Assistant Backend (Node.js)
│   ├── server.js                # Express server
│   └── package.json
│
├── mentoring-backend/           # Mentoring System Backend (Node.js)
│   ├── src/
│   │   ├── index.js             # Main server file
│   │   ├── models/              # MongoDB models
│   │   └── middleware/          # Auth middleware
│   └── package.json
│
├── P2P/                         # Peer-to-Peer Backend (Node.js)
│   ├── server.js                # Socket.io server
│   ├── public/                  # Static files
│   └── chats.json               # Chat history storage
│
├── quiz_1/                      # Quiz Generator Backend (Python/Flask)
│   ├── app.py                   # Flask application
│   ├── transcript.py            # YouTube transcript extraction
│   ├── quiz_generator.py       # Quiz generation logic
│   └── requirements.txt         # Python dependencies
│
├── package.json                 # Frontend dependencies
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **Python** 3.8 or higher
- **MongoDB Atlas** account (or local MongoDB)
- **Groq API** key ([Get one here](https://console.groq.com/))
- **npm** or **yarn** package manager

### Local Development Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/EduApp.git
cd EduApp
```

#### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at `http://localhost:5173`

#### 3. Login/Auth Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
# Then start the server
npm run dev
```

Backend will run on `http://localhost:5000`

#### 4. Groq Backend Setup

```bash
cd groq_backend

# Install dependencies
npm install

# Create .env file with GROQ_API_KEY
# Then start the server
node server.js
```

Backend will run on `http://localhost:3001`

#### 5. Mentoring Backend Setup

```bash
cd mentoring-backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
# Then start the server
npm run dev
```

Backend will run on `http://localhost:5001`

#### 6. P2P Backend Setup

```bash
cd P2P

# Install dependencies
npm install

# Start the server
node server.js
```

Backend will run on `http://localhost:3000`

> **Note**: For local development, you may use `ngrok` to expose the P2P server publicly. This is only needed for local testing and should NOT be used in production.

#### 7. Quiz Backend Setup (Python/Flask)

```bash
cd quiz_1

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file with GROQ_API_KEY
# Then start the server
python app.py
```

Backend will run on `http://localhost:5002`

### Running All Services

To run the complete application locally, you'll need to start all backend services in separate terminal windows:

1. Terminal 1: Frontend (`npm run dev`)
2. Terminal 2: Login Backend (`cd backend && npm run dev`)
3. Terminal 3: Groq Backend (`cd groq_backend && node server.js`)
4. Terminal 4: Mentoring Backend (`cd mentoring-backend && npm run dev`)
5. Terminal 5: P2P Backend (`cd P2P && node server.js`)
6. Terminal 6: Quiz Backend (`cd quiz_1 && python app.py`)

## 🔐 Environment Variables

### Frontend (.env)

Create a `.env` file in the root directory:

```env
# API Endpoints
VITE_LOGIN_API_URL=http://localhost:5000
VITE_MENTORING_API_URL=http://localhost:5001
VITE_GROQ_API_URL=http://localhost:3001
VITE_P2P_API_URL=http://localhost:3000
VITE_QUIZ_API_URL=http://localhost:5002
```

For production, replace with your Render service URLs.

### Login/Auth Backend (.env)

Create a `.env` file in the `backend/` directory:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/learnDB

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# CORS Configuration
CLIENT_ORIGIN=http://localhost:5173

# Server Port (Render will set this automatically)
PORT=5000
```

### Groq Backend (.env)

Create a `.env` file in the `groq_backend/` directory:

```env
# Groq API Key
GROQ_API_KEY=your-groq-api-key-here

# Server Port (Render will set this automatically)
PORT=3001
```

### Mentoring Backend (.env)

Create a `.env` file in the `mentoring-backend/` directory:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mentoringDB

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# CORS Configuration
CLIENT_ORIGIN=http://localhost:5173

# Server Port (Render will set this automatically)
PORT=5001
```

### P2P Backend (.env)

Optional environment variables (if needed):

```env
# Server Port (Render will set this automatically)
PORT=3000
```

### Quiz Backend (.env)

Create a `.env` file in the `quiz_1/` directory:

```env
# Groq API Key
GROQ_API_KEY=your-groq-api-key-here

# Server Port (Render will set this automatically)
PORT=5002
```

## 📚 API Documentation

### Login/Auth Backend

Base URL: `http://localhost:5000` (local) or your Render URL (production)

#### Authentication Endpoints

**POST `/api/auth/signup`**
- Register a new user
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "username": "username",
    "password": "securePassword123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt-token-here",
    "username": "username"
  }
  ```

**POST `/api/auth/login`**
- Login existing user
- **Request Body:**
  ```json
  {
    "emailOrUsername": "user@example.com",
    "password": "securePassword123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt-token-here",
    "username": "username"
  }
  ```

#### Progress Endpoints

**GET `/api/progress`**
- Get user progress (requires authentication)
- **Headers:**
  ```
  Authorization: Bearer <jwt-token>
  ```
- **Response:**
  ```json
  {
    "videosWatched": ["video-id-1", "video-id-2"],
    "quizzesCompleted": {
      "quiz-id-1": { "score": 85, "passed": true }
    }
  }
  ```

**POST `/api/progress/video/:videoId`**
- Mark video as completed
- **Headers:**
  ```
  Authorization: Bearer <jwt-token>
  ```

**POST `/api/progress/quiz/:quizId`**
- Save quiz result
- **Request Body:**
  ```json
  {
    "score": 85,
    "passed": true
  }
  ```

#### Mentor Endpoints

**GET `/api/mentor/login`**
- Mentor login endpoint

**GET `/api/mentor/:id`**
- Get mentor details

### Groq Backend

Base URL: `http://localhost:3001` (local) or your Render URL (production)

**POST `/assistant`**
- Get AI assistant response
- **Request Body:**
  ```json
  {
    "message": "What skills do I need to become a data scientist?"
  }
  ```
- **Response:**
  ```json
  {
    "reply": "To become a data scientist, you need..."
  }
  ```

### Mentoring Backend

Base URL: `http://localhost:5001` (local) or your Render URL (production)

**GET `/api/mentors`**
- Get list of mentors with filtering
- **Query Parameters:**
  - `domain` (optional): Filter by domain (e.g., "Data Science")
  - `q` (optional): Search query (searches name, title, domains, topics)
  - `page` (optional): Page number (default: 1)
  - `limit` (optional): Results per page (default: 24, max: 100)
- **Example:**
  ```
  GET /api/mentors?domain=Data%20Science&q=python&page=1&limit=10
  ```
- **Response:**
  ```json
  {
    "mentors": [
      {
        "_id": "mentor-id",
        "name": "John Doe",
        "title": "Senior Data Scientist",
        "domains": ["Data Science", "Machine Learning"],
        "topics": ["Python", "TensorFlow"],
        "rating": 4.8,
        "bio": "Experienced data scientist..."
      }
    ],
    "total": 25,
    "page": 1,
    "limit": 10
  }
  ```

**GET `/api/mentors/:id`**
- Get specific mentor details
- **Response:**
  ```json
  {
    "_id": "mentor-id",
    "name": "John Doe",
    "title": "Senior Data Scientist",
    "domains": ["Data Science"],
    "topics": ["Python", "TensorFlow"],
    "rating": 4.8,
    "bio": "Experienced data scientist...",
    "availability": "Available"
  }
  ```

**POST `/api/requests`**
- Create mentor request (requires authentication)
- **Headers:**
  ```
  Authorization: Bearer <jwt-token>
  ```
- **Request Body:**
  ```json
  {
    "mentorId": "mentor-id",
    "message": "I would like to learn about machine learning"
  }
  ```

### Quiz Backend

Base URL: `http://localhost:5002` (local) or your Render URL (production)

**GET `/generate-quiz`**
- Generate quiz from YouTube video
- **Query Parameters:**
  - `videoUrl` (required): YouTube video URL
- **Example:**
  ```
  GET /generate-quiz?videoUrl=https://www.youtube.com/watch?v=VIDEO_ID
  ```
- **Response:**
  ```json
  {
    "success": true,
    "video_id": "VIDEO_ID",
    "quiz": [
      {
        "question": "What is the main topic of this video?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": 0
      }
    ]
  }
  ```
- **Error Responses:**
  - `400`: Missing or invalid videoUrl
  - `404`: No transcript available
  - `500`: Internal server error

### P2P Backend

Base URL: `http://localhost:3000` (local) or your Render URL (production)

The P2P backend uses **WebSocket** (Socket.io) for real-time communication.

**WebSocket Events:**

- `register`: Register user for P2P communication
- `signal`: Send WebRTC signaling data
- `relay_message`: Relay chat messages
- `disconnect`: Handle user disconnection

## 🚢 Deployment

### Deploying to Render

All services are configured for deployment on Render. Follow these steps for each service:

### Frontend (Static Site)

1. **Service Type**: Static Site
2. **Root Directory**: (leave empty - root of repo)
3. **Build Command**: 
   ```bash
   npm install && npm run build
   ```
4. **Publish Directory**: `dist`
5. **Environment Variables**:
   - `VITE_LOGIN_API_URL`: Your login backend Render URL
   - `VITE_MENTORING_API_URL`: Your mentoring backend Render URL
   - `VITE_GROQ_API_URL`: Your Groq backend Render URL
   - `VITE_P2P_API_URL`: Your P2P backend Render URL
   - `VITE_QUIZ_API_URL`: Your quiz backend Render URL

### Login/Auth Backend

1. **Service Type**: Web Service
2. **Root Directory**: `backend`
3. **Build Command**: 
   ```bash
   npm install
   ```
4. **Start Command**: 
   ```bash
   npm start
   ```
5. **Environment Variables**:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your JWT secret key
   - `CLIENT_ORIGIN`: Your frontend Render URL
   - `PORT`: (Automatically set by Render)

### Groq Backend

1. **Service Type**: Web Service
2. **Root Directory**: `groq_backend`
3. **Build Command**: 
   ```bash
   npm install
   ```
4. **Start Command**: 
   ```bash
   npm start
   ```
5. **Environment Variables**:
   - `GROQ_API_KEY`: Your Groq API key
   - `PORT`: (Automatically set by Render)

### Mentoring Backend

1. **Service Type**: Web Service
2. **Root Directory**: `mentoring-backend`
3. **Build Command**: 
   ```bash
   npm install
   ```
4. **Start Command**: 
   ```bash
   npm start
   ```
5. **Environment Variables**:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your JWT secret key
   - `CLIENT_ORIGIN`: Your frontend Render URL
   - `PORT`: (Automatically set by Render)

### P2P Backend

1. **Service Type**: Web Service
2. **Root Directory**: `P2P`
3. **Build Command**: 
   ```bash
   npm install
   ```
4. **Start Command**: 
   ```bash
   npm start
   ```
5. **Environment Variables**:
   - `PORT`: (Automatically set by Render)

> **Note**: Do NOT use `ngrok` in production. Render provides public URLs automatically.

### Quiz Backend (Python/Flask)

1. **Service Type**: Web Service
2. **Root Directory**: `quiz_1`
3. **Build Command**: 
   ```bash
   pip install -r requirements.txt
   ```
4. **Start Command**: 
   ```bash
   python app.py
   ```
5. **Environment Variables**:
   - `GROQ_API_KEY`: Your Groq API key
   - `PORT`: (Automatically set by Render)

### Important Deployment Notes

⚠️ **Port Configuration**: All backend services use `process.env.PORT` (Node.js) or `os.environ.get("PORT")` (Python) to dynamically assign ports. Render automatically sets this environment variable.

⚠️ **Free Tier Cold Starts**: On Render's free tier, services may experience cold starts (15-30 seconds) after inactivity. Consider upgrading to a paid plan for production use.

⚠️ **CORS Configuration**: Ensure all backend services have CORS configured to allow requests from your frontend URL.

⚠️ **Environment Variables**: Update all frontend environment variables with your production backend URLs after deployment.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** and test thoroughly
4. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Add comments for complex logic
- Test your changes locally before submitting
- Update documentation if needed

### Reporting Issues

If you find a bug or have a feature request, please open an issue on GitHub with:
- Clear description of the problem/feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Groq](https://groq.com/) for providing fast LLM inference
- [Render](https://render.com/) for hosting infrastructure
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for database hosting
- All open-source contributors whose libraries made this project possible

## 📞 Support

For support, email support@eduapp.com or open an issue on GitHub.

---

**Made with ❤️ by the EduApp Team**


