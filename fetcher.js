const args = process.argv.slice(2, 4);
const fs = require('fs')
const request = require('request');


request(`${args[0]}`, (error, response, body) => {
  const content = body;

  console.log('statusCode:', response && response.statusCode);
  
  fs.writeFile(`${args[1]}`, content, err => {
    if (err) {
      console.error(error)
      return
    }
    //file written successfully
  })

}); 


