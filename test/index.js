'use strict';

const assert = require('assert');
const testCases = require('./testCases');
const path = './test/testData';

async function testRunner(path) {

  try {

    await testCases.walkDirBasic(path);
  }
  catch (err) {

    process.exit(1);
  }

  console.log('All test passing. Long live the king');
}


testRunner(path);
