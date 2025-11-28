# Interview Prep - Data Analyst

A clean, modern, production-ready interview preparation tool for Data Analyst positions built with React + TypeScript + TailwindCSS.

## Features

- 🎯 **6 Interview Rounds**: Comprehensive coverage of all interview stages
- 📝 **Detailed Procedures**: Step-by-step guidance for each round
- ❓ **MCQ Practice**: Interactive multiple choice questions
- ✅ **Progress Tracking**: Mark rounds as completed (stored in localStorage)
- 🎨 **Modern UI**: Beautiful pastel gradient design with smooth animations

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  pages/
    InterviewHome.tsx        → Landing page with round cards
    Round_HR.tsx            → HR/Recruiter Screening round
    Round_Technical.tsx     → Technical round (SQL, Data Cleaning, Statistics)
    Round_Case.tsx          → Case Study round
    Round_Viz.tsx           → Data Visualization round
    Round_Behavioral.tsx    → Behavioral (STAR) round
    Round_Managerial.tsx    → Managerial/Culture Fit round
  components/
    RoundCard.tsx           → Reusable card component for landing page
    MCQGroup.tsx            → Multiple choice question component
    CompletionButton.tsx    → Completion tracking button
```

## Tech Stack

- **Vite** - Build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **React Router** - Client-side routing

## Design Tokens

- Background: `#ffffff`
- Muted: `#f5f7fb`
- Text: `#0f1724`
- Accent: `#6B21A8`
- Gradient: `linear-gradient(135deg, #BDE0FE 0%, #E9D5FF 100%)`
- Card Radius: `16px`



