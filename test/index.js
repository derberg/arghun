'use strict';

const assert = require('assert');
const testCases = require('./testCases');
const testDataPath = './test/testData/testDirectory';
const testObjCount = require('./testData/objOpsTestObjectCount.json');
const testObjMap = require('./testData/objOpsTestObjectMap.json');
const testObjData = require('./testData/testObjData.json');

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
  testCases.objOpsTests.isBlacklistedTrue(testObjData.blacklist.strTrue, testObjData.blacklist.blist);
  testCases.objOpsTests.isBlacklistedFalse(testObjData.blacklist.strFalse, testObjData.blacklist.blist);
  testCases.objOpsTests.getCustomDetailsCount(testObjCount, testObjData.customDetailsPatterns);
  testCases.objOpsTests.getCustomDetailsNames(testObjMap, testObjData.customDetailsPatterns);

  console.log('All tests passing. Long live the king');
  console.timeEnd('Test run time');
}


testRunner(testDataPath);
