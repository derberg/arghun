'use strict';

const assert = require('assert');
const testCases = require('./testCases');
const testDataPath = './test/testData/testDirectory';
const testObjCount = require('./testData/objOpsTestObjectCount.json');
const testObjMap = require('./testData/objOpsTestObjectMap.json');

async function testRunner(testDataPath) {

  console.time('Test run time');

  try {

    for (const test in testCases.walkDirTests) {
      if (testCases.walkDirTests.hasOwnProperty(test)) {

        await testCases.walkDirTests[test](testDataPath);
      }
    }

  }
  catch (err) {

    process.exit(1);
  }

  testCases.objOpsTests.getTotalCount(testObjCount);
  testCases.objOpsTests.getTotalNames(testObjMap);

  console.log('All tests passing. Long live the king');
  console.timeEnd('Test run time');
}


testRunner(testDataPath);
