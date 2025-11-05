# Firebase Studio Clone[WIP]

A full-stack Firebase Studio clone built as a personal learning project.
This isn’t just a copy — it’s a hands-on re-creation of the Firebase Console experience, built from scratch to understand how things work behind the scenes.

## 🏗️ Project Structure

The project is organized into two main parts:

### Frontend (React + Vite)
- Built with React and Vite for optimal performance
- Features a code playground with syntax highlighting
- Implements file tree structure visualization
- Uses atomic design pattern for components
- State management with custom stores
- Custom theme support (currently includes Night Owl)

### Backend (Node.js)
- RESTful API architecture
- Project management system
- File system operations
- Code execution utilities
- Configuration management

## ✨ Features

- 📝 Code Playground with real-time editing
- 🌳 Project file tree visualization
- 🎨 Customizable themes
- 📂 Project management
- 🔄 Real-time file synchronization
- 🚀 Live code execution

## 🛠️ Technology Stack

### Frontend
- React.js
- Vite
- Axios for API calls
- React Query for data fetching
- Zustand
- Custom state management
- TailwindCss
-Antd Design and icon

### Backend
- Node.js
- Express.js
- Environment configuration
- File system management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/mahin273/FireBase_Studio_Clone.git
cd FireBase_Studio_Clone
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd ../backend
npm install
```

4. Create `.env` files in both frontend and backend directories using the provided templates

### Running the Application

1. Start the backend server
```bash
cd backend
npm run dev
```

2. Start the frontend development server
```bash
cd frontend
npm run dev
```

## 📁 Project Structure Details

### Frontend Structure
```
frontend/
├── src/
│   ├── components/         # Atomic design components
│   │   ├── atoms/         # Basic building blocks
│   │   ├── molecules/     # Composite components
│   │   └── organisms/     # Complex components
│   ├── pages/             # Main application pages
│   ├── hooks/             # Custom React hooks
│   ├── store/             # State management
│   └── utils/             # Utility functions
```

### Backend Structure
```
backend/
├── src/
│   ├── config/           # Server configuration
│   ├── controllers/      # Request handlers
│   ├── routes/          # API routes
│   ├── service/         # Business logic
│   └── utils/           # Utility functions
```

## 🤝 Contributing
If you want to contribute:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
