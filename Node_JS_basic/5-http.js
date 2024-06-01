const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const dbFile = process.argv[2];
    countStudents(dbFile)
      .then((message) => {
        res.end(message);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.trim().split('\n').filter((row) => row.trim() !== '');

        const students = rows.slice(1);
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
}
