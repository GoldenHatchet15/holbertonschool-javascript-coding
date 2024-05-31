const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.trim().split('\n');
        let CSCount = 0;
        let SWECount = 0;
        const csList = [];
        const sweList = [];

        for (let i = 1; i < rows.length; i++) {
          const row = rows[i].trim();
          if (!row) continue;

          const [firstName, , , field] = row.split(',');

          if (field.trim() === 'CS') {
            CSCount++;
            csList.push(firstName);
          } else if (field.trim() === 'SWE') {
            SWECount++;
            sweList.push(firstName);
          }
        }

        console.log(`Number of students: ${CSCount + SWECount}`);
        console.log(`Number of students in CS: ${CSCount}. List: ${csList.join(', ')}`);
        console.log(`Number of students in SWE: ${SWECount}. List: ${sweList.join(', ')}`);

        resolve();
      }
    });
  });
}

module.exports = countStudents;
