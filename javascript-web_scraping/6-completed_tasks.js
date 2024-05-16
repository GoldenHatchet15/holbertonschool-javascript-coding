#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

function handleResponse(error, response, todos) {
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error('Failed to fetch data, Status Code:', response.statusCode);
    return;
  }
  const counts = countCompletedTasks(todos);
  printCounts(counts);
}

function countCompletedTasks(todos) {
  const completedTasks = {};
  todos.forEach(todo => {
    if (todo.completed) {
      completedTasks[todo.userId] = (completedTasks[todo.userId] || 0) + 1;
    }
  });
  return completedTasks;
}

function printCounts(completedTasks) {
  Object.keys(completedTasks).forEach(userId => {
    console.log(`'${userId}': ${completedTasks[userId]}`);
  });
}

request(apiUrl, { json: true }, handleResponse);
