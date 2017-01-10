'use strict';

const getTotalTests = require('./getTotal.js');
const isBlacklisted = require('./isBlacklisted.js');
const getCustomDetails = require('./getCustomDetails.js');

const getTotalCount = getTotalTests.getTotalCount;
const getTotalNames = getTotalTests.getTotalNames;

const objOpsTests = {
  getTotalCount,
  getTotalNames,
  isBlacklisted,
  getCustomDetails
};

module.exports = objOpsTests;
