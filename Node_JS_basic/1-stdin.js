const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message and prompt for user's name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);
  
  // Close the readline interface
  rl.close();
});

// Event listener for when the readline interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
