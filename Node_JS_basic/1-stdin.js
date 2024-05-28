// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Set the encoding for the standard input to UTF-8
process.stdin.setEncoding('utf8');

// Listen for data input from the user
process.stdin.once('data', (data) => {
  // Trim the input to remove any extraneous whitespace
  const name = data.trim();
  
  // Display the user's name
  console.log(`Your name is: ${name}`);
  
  // Display the closing message
  console.log('This important software is now closing');
  
  // End the process
  process.stdin.end();
  process.exit();
});
