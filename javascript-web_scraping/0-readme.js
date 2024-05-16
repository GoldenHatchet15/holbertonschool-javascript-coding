#!/usr/bin/env node

const fs = require('fs');
const filePath = process.argv[2];

try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
} catch (error) {
  console.error(`{ Error: ${error.code}: no such file or directory, open '${filePath}'
    at Error (native)
    errno: ${error.errno},
    code: '${error.code}',
    syscall: '${error.syscall}',
    path: '${filePath}' }`);
}
