// 4-http.js

const http = require('http');

// Create HTTP server
const app = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response body
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245 or the port defined in the environment variable (for flexibility)
const PORT = process.env.PORT || 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app
module.exports = app;
