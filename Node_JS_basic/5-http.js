const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const databasePath = path.join(__dirname, process.argv[2]);
        fs.readFile(databasePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            const lines = data.split('\n');
            const students = lines.filter(line => line.trim() !== '');
            const csStudents = students.filter(student => student.includes('CS')).map(student => student.split(',')[0]);
            const sweStudents = students.filter(student => student.includes('SWE')).map(student => student.split(',')[0]);
            res.write(`This is the list of our students\n`);
            res.write(`Number of students: ${students.length}\n`);
            res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
            res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`);
            res.end();
        });
    } else {
        res.end('Not Found');
    }
});

app.listen(1245);

module.exports = app;
