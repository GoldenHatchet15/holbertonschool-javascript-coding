#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, { json: true }, (error, response, todos) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  
  if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
    return;
  }

  if (!todos || !Array.isArray(todos)) {
    console.error('Invalid API response');
    return;
  }

  const completedTasks = {};
  todos.forEach(todo => {
    if (todo.completed) {
      if (completedTasks.hasOwnProperty(todo.userId)) {
        completedTasks[todo.userId]++;
      } else {
        completedTasks[todo.userId] = 1;
      }
    }
  });

  for (const userId in completedTasks) {
    if (completedTasks.hasOwnProperty(userId)) {
      console.log(`'${userId}': ${completedTasks[userId]}`);
    }
  }
});
