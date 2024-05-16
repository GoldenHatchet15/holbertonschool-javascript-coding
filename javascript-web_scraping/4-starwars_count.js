#!/usr/bin/node

const axios = require('axios');
const apiUrl = process.argv[2];

axios.get(apiUrl)
  .then(response => {
    const films = response.data.results;
    let count = 0;

    films.forEach(film => {
      film.characters.forEach(character => {
        if (character.endsWith('/18/')) {
          count++;
          return;
        }
      });
    });

    console.log(count);
  })
  .catch(error => {
    console.error('Error:', error);
  });
