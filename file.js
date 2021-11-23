const fs = require('fs')

fs.writeFile('test.txt','Hello World!', error => {
  console.log(error);
})