const arr = process.argv.splice(2);
const request = require('request');

const breed = arr[0];

request(`http://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) return console.log(error); 
    
    let data = JSON.parse(body);

    if (!data.length) console.log('This breed does not exist');
    else {
      let description = data[0]['description'];
      console.log(description);
    }
});