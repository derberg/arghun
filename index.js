/*eslint no-console: "error" */

const walkDir = require('./src');
const objOps = require('./src/objOps');
const path = '../devportal/devportal/src/documents';
const opt = {
  blFiles: ['^index\.', 'meta-inf', 'api.raml', 'apireference.html', 'client.zip', 'apiconsole.html'],
  blDir: ['.git', 'apiconsole', 'apinotebooks', 'blog', 'bower_components', 'build', 'error', 'fonts', 'images', 'img', 'internal', 'lunr', 'matrix', 'placeholders', 'scripts', 'styles', 'services/beta', 'services/eu', 'services/us', 'latest$', '/client', '/download']
};

console.log(`Your current execution location is: ${__dirname}`);

async function start(path) {

  try {
    const sum = await walkDir(path, opt);
    const total = objOps.getTotal(sum);
    console.log('sum', sum);
    console.log('total', total);
  }

  catch(err) {

    console.log(err);
  }
}

start(path);
