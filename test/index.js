'use strict';

const assert = require('assert');
const walkDirPure = require('./testCases/walkDirPure.js');
const path = './test/testData';

async function testRunner(path) {

  await walkDirPure(path);

}


testRunner(path);
