#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.log('Failed to get response:', response.statusCode);
    return;
  }

  let count = 0;
  body.results.forEach(film => {
    if (film.characters.includes(`https://swapi-api.hbtn.io/api/people/18/`)) {
      count++;
    }
  });

  console.log(count);
});
