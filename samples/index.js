/*eslint no-console: "error" */
'use strict';

const arghun = require('../');
const path = '../devportal/devportal/tmp/latestResultRepo';
const opt = {
  blFiles: ['^index\.', 'meta-inf', 'api.raml', 'apireference.html', 'client.zip', 'apiconsole.html'],
  blDir: ['.git', 'apiconsole', 'apinotebooks', 'blog', 'bower_components', 'build', 'error', 'fonts', 'images', 'img', 'internal', 'lunr', 'matrix', 'placeholders', 'scripts', 'styles', 'services/beta', 'services/eu', 'services/us', 'latest$', '/client', '/download', 'vendor']
};
const details = [
  {
    name: "Services",
    pattern: "latestResultRepo/services/"
  },
  {
    name: "Tools",
    pattern: "latestResultRepo/tools/"
  },
  {
    name: "Release Notes",
    pattern: "latestResultRepo/rn/"
  },
  {
    name: "Getting Started",
    pattern: "latestResultRepo/gettingstarted/"
  },
  {
    name: "Overview",
    pattern: "latestResultRepo/overview/"
  },
  {
    name: "Solutions",
    pattern: "latestResultRepo/solutions/"
  }
];

console.log(`Your current execution location is: ${__dirname}`);

async function sample(path) {

  try {
    console.time('walkDir');
    const sumTree = await arghun.walkDir(path, opt);
    console.timeEnd('walkDir');
    console.log('sum', sumTree);
    console.time('getTotal');
    const total = arghun.getTotal(sumTree);
    console.timeEnd('getTotal');
    console.log('total', total);
    console.time('getCustomDetails');
    const patternsSums = arghun.getCustomDetails(sumTree, details);
    console.timeEnd('getCustomDetails');
    console.log('pattern', patternsSums);
  }

  catch(err) {

    console.log(err);
  }
}

sample(path);
