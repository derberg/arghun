'use strict';

const assert = require('assert');
const walkDirPure = require('./testCases/walkDirPure.js');
const path = './test/testData';

async function testRunner(path) {

  try {

    await walkDirPure(path);
  }
  catch (err) {

    throw new Error(err);
  }


}


testRunner(path);
