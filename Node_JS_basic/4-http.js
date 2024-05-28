// 4-http.js

const http = require('http');

const PORT = 1245;
const ALTERNATE_PORT = 1246;

// Create HTTP server
const app = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response body
  res.end('Hello Holberton School!\n');
});

// Function to start the server
function startServer(port) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);
      if (port === PORT) {
        console.log(`Trying to use alternate port ${ALTERNATE_PORT}...`);
        startServer(ALTERNATE_PORT);
      }
    } else {
      console.error(`Failed to start server: ${err.message}`);
    }
  });
}

// Start the server on the primary port
startServer(PORT);

module.exports = app;
