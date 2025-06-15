# spa-express

Serve Single Page Application (SPA) builds like React, Angular, or Vue directly using Express.js with zero configuration.

## Features

- Plug-and-play middleware for serving SPA build folders
- Supports React, Angular, Vue, and other frontend frameworks
- Simple one-liner setup using Express.js
- Automatically serves `index.html` for unknown routes (for client-side routing)

## Installation

``npm install spa-express``

## Usage

```js
import express from 'express';
import spa_express from 'spa-express';

const app = express();

// Serve your SPA from the 'dist' directory (can be 'build' for React apps)
app.use(spa_express(app, 'dist'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

## Author

Ganesh Kandu [kanduganesh@gmail.com]
