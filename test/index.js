'use strict';

const assert = require('assert');
const walkDirPure = require('./testCases/walkDirPure.js');
const path = './test/testData';

async function testRunner(path) {

  try {

    await walkDirPure(path);
  }
  catch (err) {

    process.exit(1);
  }

  console.log('All test passing. Long live the king');
}


testRunner(path);
