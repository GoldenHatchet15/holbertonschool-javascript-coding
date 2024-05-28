// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Use process.stdin to read user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Trim any extra whitespace

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // End the input process and display the closing message
  process.stdin.end();
});

// Display the closing message when the input ends
process.stdin.on('end', () => {
  console.log("This important software is now closing");
});

// Handle the process ending by user interruption
process.on('SIGINT', () => {
  console.log("\nThis important software is now closing");
  process.exit();
});
