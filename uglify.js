const uglify = require('uglify-js');
const fs = require('fs');
const path = require('path');

const fileToRead = path.join(process.cwd(), 'generated', 'test.js');
const fileToWrite = path.join(process.cwd(), 'www', 'build', 'main.js');

const response = uglify.minify(fileToRead, {
  compress: {
    unused: true,
    dead_code: true,
    toplevel: true
  },
  mangle: true,
});

// fs.writeFileSync(fileToWrite, response.code.toString());
console.log(response.code.toString());