const express = require('express');
const fs = require('fs');
const app = express();

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.trim().split('\n').filter((row) => row.trim() !== '');
        const students = rows.slice(1); // Skip the header row
        const totalStudents = students.length;

        const csStudents = [];
        const sweStudents = [];

        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');

          if (field.trim() === 'CS') {
            csStudents.push(firstName);
          } else if (field.trim() === 'SWE') {
            sweStudents.push(firstName);
          }
        });

        let message = `Number of students: ${totalStudents}\n`;
        message += `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`;
        message += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;

        resolve(message);
      }
    });
  });
};

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students endpoint
app.get('/students', (req, res) => {
  const dbFile = process.argv[2];
  countStudents(dbFile)
    .then((message) => {
      res.send(`This is the list of our students\n${message}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;