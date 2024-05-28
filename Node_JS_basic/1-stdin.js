// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (name) => {
  const trimmedName = name.toString().trim();
  if (trimmedName) {
    process.stdout.write(`Your name is: ${trimmedName}\n`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});

process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
