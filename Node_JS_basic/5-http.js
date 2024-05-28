// 5-http.js

const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to count students from the CSV file
function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const header = lines.shift(); // Remove the header line
      const students = lines.filter(line => line.trim() !== '');
      
      const csStudents = students.filter(student => student.includes('CS')).map(student => student.split(',')[0]);
      const sweStudents = students.filter(student => student.includes('SWE')).map(student => student.split(',')[0]);

      const result = [
        `This is the list of our students`,
        `Number of students: ${students.length}`,
        `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`,
        `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`
      ].join('\n');

      resolve(result);
    });
  });
}

// Create HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = path.join(__dirname, process.argv[2]);

    countStudents(databasePath)
      .then(result => {
        res.end(result);
      })
      .catch(error => {
        res.end(error.message);
      });
  } else {
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app
module.exports = app;
