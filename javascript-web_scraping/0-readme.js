#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.log(`{ Error: ${error.code}: no such file or directory, open '${filePath}'
    at Error (native)
    errno: ${error.errno},
    code: '${error.code}',
    syscall: '${error.syscall}',
    path: '${filePath}' }`);
  } else {
    console.log(data);
  }
});
