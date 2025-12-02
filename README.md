# Career Guidance Platform

> An AI-powered personalized career guidance and learning platform built with modern web technologies.

## Overview

Career Guidance is a comprehensive web application designed to help students discover and navigate their ideal career paths. The platform leverages AI-powered assessments, mentorship opportunities, and personalized learning resources to guide users through their career journey.

## Features

- **Career Assessment**: AI-driven career assessment quizzes to identify suitable career paths
- **Mentorship**: Connect with experienced mentors in your field of interest
- **Interview Preparation**: Dedicated resources and mock interview tools
- **Learning Resources**: Curated content for skill development
- **Quiz System**: Interactive quizzes to assess and improve knowledge
- **Projects Section**: Showcase and manage projects
- **Chat Bot Support**: AI-powered chatbot for instant assistance
- **Responsive Design**: Works seamlessly across all devices

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Modern build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality React components
- **React Hook Form** - Form state management
- **Zod** - TypeScript-first schema validation
- **Recharts** - Data visualization library
- **Axios** - HTTP client

### Backend
- Node.js-based API server
- RESTful architecture
- Multiple backend services (see directory structure)

### Build & Development
- ESLint - Code linting
- PostCSS - CSS transformations
- TailwindCSS - CSS framework

## Project Structure

```
Career-Guidance/
├── src/
│   ├── pages/              # Page components
│   ├── components/         # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── api/               # API integration
│   ├── data/              # Static data files
│   ├── Interview/         # Interview preparation features
│   ├── Mentor_Page/       # Mentorship features
│   ├── chat_bot_3/        # Chatbot implementation
│   ├── notes/             # Notes management
│   ├── lib/               # Utility libraries
│   └── App.tsx            # Main App component
├── backend/               # Backend services
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   └── middleware/        # Express middleware
├── public/                # Static assets
├── quiz_1/               # Quiz module
├── P2P/                  # Peer-to-peer features
└── mentoring-backend/    # Mentorship service
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup

1. Clone the repository:
```bash
git clone https://github.com/samhoon000/Career-Guidance.git
cd Career-Guidance
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```
# Add your API endpoints and configuration here
VITE_API_URL=http://localhost:3000
```

## Running the Application

### Development
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Backend Setup

Each backend service has its own setup requirements. Navigate to the respective backend directory and follow the setup instructions:

- `backend/` - Main API server
- `mentoring-backend/` - Mentorship services
- `groq_backend/` - Groq integration

## Key Features in Detail

### Career Assessment
The platform uses AI-powered quizzes to assess user skills and interests, providing personalized career path recommendations.

### Mentorship Program
Connect with experienced professionals who can guide you through your career journey and answer your questions.

### Interview Preparation
Practice with mock interviews, get feedback, and improve your interview skills with curated resources.

### Learning Hub
Access to articles, tutorials, and resources organized by career paths and skills.

## Contributors

- [@samhoon000](https://github.com/samhoon000) - Abdul Samhoon
- [@Swalih-05](https://github.com/Swalih-05)
- [@Harshith-76](https://github.com/Harshith-76)

## Development

Contributions are welcome! Please feel free to submit a Pull Request.

### Commit Convention
We follow semantic commit messages:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `style:` for code style changes
- `refactor:` for code refactoring
- `test:` for test updates

## License

This project is private and not licensed for external use.

## Contact

For questions or support regarding the Career Guidance Platform, please reach out to the project maintainers.

---

**Last Updated**: December 2, 2025
