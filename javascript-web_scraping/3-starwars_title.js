#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, { json: true }, (error, response, body) => {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
    return;
  }
  if (response.statusCode !== 200) {
    console.log('Error status code:', response.statusCode);
    return;
  }
  console.log(body.title);
});
