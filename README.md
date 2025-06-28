# spa-express

Serve Single Page Application (SPA) builds like React, Angular, or Vue directly using Express.js with zero configuration.

## Features

- 📦 Plug-and-play middleware for serving SPA build folders
- 🌐 Automatically handles unknown routes with `index.html` for client-side routing
- 🚀 Works with all modern SPA frameworks like React, Angular, and Vue
- 🔧 No need to manually configure static file routes
- ✅ Supports deployment scenarios with frontend and backend running on different ports

## Benefits

- **No manual CORS handling required**: When frontend (SPA) and backend (API) run on different ports or domains, this setup ensures you can serve your SPA from the backend directly—eliminating cross-origin issues in many cases.
- **Single server deployment**: Serve both your API and frontend from the same Express app and domain to avoid CORS errors.
- **Cleaner architecture**: Frontend and backend managed under a unified Express instance, making deployment and local development simpler.
- **Simplified whitelisting**: Reduces the need for URL/port whitelisting across environments since both services run on the same origin.

## Installation

``npm install spa-express``

## Usage

```js
import express from 'express';
import spa_express from 'spa-express';

const app = express();

// Serve your SPA from the 'dist' directory (can be 'build' for React apps)
// add at the end of all routes andn just before listen
app.use(spa_express('dist'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

## Author

Ganesh Kandu [kanduganesh@gmail.com]
