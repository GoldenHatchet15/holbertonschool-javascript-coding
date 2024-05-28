// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((fields) => {
        let message = 'This is the list of our students\n';

        for (const [field, students] of Object.entries(fields).sort()) {
          message += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }

        res.status(200).send(message.trim());
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((fields) => {
        if (!fields[major]) {
          res.status(200).send('List: ');
        } else {
          res.status(200).send(`List: ${fields[major].join(', ')}`);
        }
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

export default StudentsController;
