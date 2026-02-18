# React Portfolio

Personal portfolio site built with React, TypeScript, and Vite.

## Tech Stack

- **React 18** with functional components and hooks
- **TypeScript** for type safety across all components
- **Vite** for fast dev server and optimized builds
- **React Router v6** for client-side routing (HashRouter)
- **Bootstrap 5** + **React Bootstrap v2** for UI components
- **@react-spring/web** for animations
- **Express** backend with Nodemailer for contact form

## Project Structure

```
frontend/
  src/
    components/   # Reusable UI components (Card, Carousel, Hero, Footer, etc.)
    pages/        # Route pages (HomePage, AboutPage, Contact)
    assets/       # Images and static assets
    types/        # TypeScript type declarations
backend/
  server.js       # Express server with email API
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev        # Start dev server on http://localhost:3000
npm run build      # TypeScript check + production build
npm run preview    # Preview production build locally
```

### Backend

```bash
cd backend
npm install
npm run dev        # Start with nodemon (hot reload)
npm start          # Start production server on port 5000
```

The backend requires `EMAIL_USER` and `EMAIL_PASS` environment variables for the contact form.

## Recent Modernization

- Migrated from Create React App to **Vite**
- Upgraded React 17 to **React 18** (`createRoot` API)
- Upgraded React Router v5 to **v6** (`Routes`/`element` pattern)
- Upgraded Bootstrap 4 to **v5** and React Bootstrap to **v2**
- Converted all components from JavaScript to **TypeScript**
- Converted Carousel from class component to **functional component with hooks**
- Upgraded react-spring v8 to **@react-spring/web v9**
- Backend migrated to **ES modules** (`import`/`export`)
- Added HTML sanitization to the `/send` endpoint
