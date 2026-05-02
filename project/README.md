# Todo App - React Project

A simple, beginner-friendly Todo Application built with React and Vite.

## Features
- Add new todos with a title
- Set due dates for each todo
- Bootstrap styling for responsive design

## Project Structure
```
project/
├── src/
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Access the app:**
   Open your browser and go to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## Technologies Used
- **React 18.2** - UI library
- **Vite 5.2** - Build tool and dev server
- **Bootstrap 5.3** - CSS framework
- **ESLint** - Code quality tool

## Troubleshooting

### App not displaying on localhost:5173?
1. Make sure you ran `npm install` in the project folder
2. Verify `main.jsx` is importing `App` correctly
3. Check that `index.html` has `<div id="root"></div>`
4. Look at the browser console and terminal for errors

### Port 5173 already in use?
Vite will automatically use the next available port. Check the terminal output for the actual URL.

## Next Steps for Learning
- Add state management with `useState` hook
- Create separate components for better organization
- Add a delete button for todos
- Implement local storage to save todos
- Add form validation

---
Happy coding! 🚀
