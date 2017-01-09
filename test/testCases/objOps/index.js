'use strict';

const getTotalCount = require('./getTotal.js');
const isBlacklisted = require('./isBlacklisted.js');
const getCustomDetails = require('./getCustomDetails.js');

const objOpsTests = {
  getTotalCount,
  isBlacklisted,
  getCustomDetails
};

module.exports = objOpsTests;
