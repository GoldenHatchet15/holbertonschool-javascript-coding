// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Use process.stdin to read user input
process.stdin.setEncoding('utf8');

// Listen for data event to get user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Trim any extra whitespace

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Display the closing message and end the process
  console.log("This important software is now closing");
  process.exit();
});
