const fs = require('fs');

const CSV_FILE_PATH = 'database.csv';
const UTF8_ENCODING = 'utf8';
const CS_FIELD = 'CS';
const SWE_FIELD = 'SWE';
const ERROR_MESSAGE = 'Cannot load the database';

function processRows(data) {
  const rows = data.trim().split('\n');
  let CSCount = 0;
  let SWECount = 0;
  const csList = [];
  const sweList = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].trim();
    if (!row) {
      continue;
    }

    const [firstName, , , field] = row.split(',');

    if (field.trim() === CS_FIELD) {
      CSCount += 1;
      csList.push(firstName);
    } else if (field.trim() === SWE_FIELD) {
      SWECount += 1;
      sweList.push(firstName);
    }
  }

  console.log(`Number of students: ${CSCount + SWECount}`);
  console.log(`Number of students in CS: ${CSCount}. List: ${csList.join(', ')}`);
  console.log(`Number of students in SWE: ${SWECount}. List: ${sweList.join(', ')}`);
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, UTF8_ENCODING, (error, data) => {
      if (error) {
        reject(new Error(ERROR_MESSAGE));
      } else {
        processRows(data);
        resolve();
      }
    });
  });
}

module.exports = countStudents;
