#!/usr/bin/node

// Output the initial greeting
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle user input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk) {
    const name = chunk.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    // Signal the end of input to ensure the end event is triggered
    process.stdin.end();
  }
});

// Handle the end of input
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
