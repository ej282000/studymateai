# StudyMate AI

An AI-powered learning assistant that helps students organize study materials, generate summaries, create personalized study schedules, and prepare for exams efficiently.

## Features

- 📚 **Organize Study Materials** - Centralize all your notes, documents, and resources in one intelligent platform
- 🧠 **AI-Generated Summaries** - Transform lengthy materials into concise, easy-to-understand summaries
- 📅 **Personalized Study Schedules** - Get custom study plans tailored to your learning pace and exam dates
- 🎯 **Exam Preparation** - Practice with AI-generated quizzes and track your progress

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 5
- **Language:** TypeScript
- **Icons:** Lucide React
- **Styling:** Custom CSS

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js) or yarn

## Local Setup

Follow these steps to set up the project locally:

### 1. Navigate to the project directory

```bash
cd "c:\AI Training"
```

### 2. Install dependencies

```bash
npm install
```

This will install all the required packages including:

- React and React DOM
- Vite and TypeScript
- Lucide React for icons
- All development dependencies

### 3. Start the development server

```bash
npm run dev
```

The application will start on `http://localhost:3000` and automatically open in your default browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
AI Training/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features showcase
│   │   ├── Dashboard.tsx    # Main dashboard with tabs
│   │   └── Footer.tsx       # Footer component
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # TypeScript declarations
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## Features Overview

### Study Materials

Upload and organize your study materials in one central location. Supports various file formats for easy access.

### AI Summaries

Generate intelligent summaries of your study materials using AI technology, making complex topics easier to understand.

### Study Schedule

Create personalized study schedules based on your exam dates, available time, and subjects to cover.

### Practice & Quizzes

Test your knowledge with AI-generated quizzes and track your progress toward mastering different topics.

## Development

The project uses:

- **Hot Module Replacement (HMR)** for instant updates during development
- **TypeScript** for type safety and better developer experience
- **ESLint** for code quality and consistency
- **Lucide React** for beautiful, consistent icons

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Browser Support

This application supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration for AI processing
- User authentication and data persistence
- Real-time collaboration features
- Mobile app version
- Integration with popular learning management systems

## License

MIT License - feel free to use this project for learning and development purposes.

## Support

For issues or questions, please open an issue in the project repository.

---

Built with ❤️ for students everywhere
