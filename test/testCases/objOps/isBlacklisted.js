/*eslint no-console: "error" */
'use strict';

const assert = require('assert');
const arghun = require('../../../');
const expectedTrue = true;
const expectedFalse = false;


function isBlacklistedTrue(str, blacklist) {

  try {

    const result = arghun.isBlacklisted(str, blacklist);
    assert.equal(result, expectedTrue, 'isBlacklisted with true failes');
    console.log("isBlacklisted with true - successful");
  }

  catch(err) {

    console.log(err);
    throw new Error(err);
  }
}

function isBlacklistedFalse(str, blacklist) {

  try {

    const result = arghun.isBlacklisted(str, blacklist);
    assert.equal(result, expectedFalse, 'isBlacklisted with false failes');
    console.log("isBlacklisted with false - successful");
  }

  catch(err) {

    console.log(err);
    throw new Error(err);
  }

}



const isBlacklistedTest = {
  isBlacklistedFalse,
  isBlacklistedTrue
}
module.exports = isBlacklistedTest;
