const uglify = require('uglify-js');
const path = require('path');

const fileToRead = path.join(process.cwd(), 'uglify-content.js');

const response = uglify.minify(fileToRead, {
  compress: {
    unused: true,
    dead_code: true,
    toplevel: true
  },
  mangle: true,
});

console.log(response.code.toString());