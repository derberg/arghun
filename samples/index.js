/*eslint no-console: "error" */
'use strict';

const zlicz = require('../');
const objOps = require('../src/objOps');
const path = './test/testData';
const opt = {
  dirMap: false,
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

async function start(path) {

  try {
    console.time(path);
    const sumTree = await zlicz.walkDir(path, opt);

    const total = objOps.getTotal(sumTree);
    const patternsSums = objOps.getCustomDetails(sumTree, details);
    console.log('sum', sumTree);
    console.log('pattern', patternsSums);
    console.log('total', total);
    console.timeEnd(path);
  }

  catch(err) {

    console.log(err);
  }
}

start(path);
