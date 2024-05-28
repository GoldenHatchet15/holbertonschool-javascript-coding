// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data by new line to get each row
    const rows = data.trim().split('\n');

    // Initialize counters for each field
    let CSCount = 0;
    let SWECount = 0;
    const csList = [];
    const sweList = [];

    // Skip the header row (first row)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const [firstName, lastName, age, field] = row.split(',');

      // Check if the field is CS or SWE and increment respective counters
      if (field.trim() === 'CS') {
        CSCount++;
        csList.push(firstName);
      } else if (field.trim() === 'SWE') {
        SWECount++;
        sweList.push(firstName);
      }
    }

    // Output the results
    console.log(`Number of students: ${CSCount + SWECount}`);
    console.log(`Number of students in CS: ${CSCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${SWECount}. List: ${sweList.join(', ')}`);
  } catch (error) {
    // If an error occurs (e.g., file not found), throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
