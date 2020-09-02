console.log('action called')
const fs = require('fs');
const path = require('path');

fs.readFile(path.join('app.json'), 'utf-8', (error, dataString) => {
  if (error) {
    console.error(error);
    throw new Error(error);
  }
  const data = JSON.parse(dataString);
  console.log('VERSION: ', data.version)
})
