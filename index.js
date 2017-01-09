'use strict';

const walkDir = require('./src');
const objOps = require('./src/objOps');

const getTotal = objOps.getTotal;
const isBlacklisted = objOps.isBlacklisted;
const getCustomDetails = objOps.getCustomDetails;

const arghun = {
  walkDir,
  getTotal,
  isBlacklisted,
  getCustomDetails
};

module.exports = arghun;
