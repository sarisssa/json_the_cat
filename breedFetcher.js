const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`http://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      callback(null, ((data.length > 0) ? data[0]['description'] : 'Breed not found.')); //Code supplied by mentor
    }
  });
};

module.exports = fetchBreedDescription;