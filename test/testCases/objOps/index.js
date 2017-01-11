'use strict';

const getTotalTests = require('./getTotal.js');
const isBlacklistedTest = require('./isBlacklisted.js');
const getCustomDetails = require('./getCustomDetails.js');

const getTotalCount = getTotalTests.getTotalCount;
const getTotalNames = getTotalTests.getTotalNames;
const isBlacklistedTrue = isBlacklistedTest.isBlacklistedTrue;
const isBlacklistedFalse = isBlacklistedTest.isBlacklistedFalse;


const objOpsTests = {
  getTotalCount,
  getTotalNames,
  isBlacklistedTrue,
  isBlacklistedFalse,
  getCustomDetails
};

module.exports = objOpsTests;
