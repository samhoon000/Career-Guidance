# Mentor Portal

A modern, minimal SaaS-style mentor login and application system built with React (Vite).

## Features

- 📝 Comprehensive Mentor Signup/Application Form (`/`)
- ✅ Application Submitted Confirmation (`/mentor/submitted`)
- 🎨 Modern pastel gradient design with glassmorphism effects

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up Web3Forms:
   - Sign up at [Web3Forms](https://web3forms.com/)
   - Get your access key
   - Create a `.env` file in the root directory
   - Add your access key: `VITE_WEB3FORMS_KEY=your_access_key_here`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Routes

- `/` - Mentor application form
- `/mentor/submitted` - Application submission confirmation

## Design Features

- Modern minimal SaaS design
- Pastel gradient accents
- Rounded cards with glassmorphism effects
- Smooth hover animations
- Mobile responsive layout
- Clean, center-aligned components

## Form Submission

The mentor signup form uses Web3Forms to send application data via email. All form fields are sent to the admin email configured in your Web3Forms account.

## Technologies

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Web3Forms API

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```
