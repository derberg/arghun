'use strict';

const assert = require('assert');
const testCases = require('./testCases');
const path = './test/testData';

async function testRunner(path) {

  console.time('Test run time');

  try {

    for (const test in testCases) {
      if (testCases.hasOwnProperty(test)) {

        await testCases[test](path);
      }
    }

  }
  catch (err) {

    process.exit(1);
  }

  console.log('All tests passing. Long live the king');
  console.timeEnd('Test run time');
}


testRunner(path);
