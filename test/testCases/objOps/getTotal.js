/*eslint no-console: "error" */
'use strict';

const assert = require('assert');
const arghun = require('../../../');
const expected = 101;

async function getTotalCount(obj) {

  try {

    const result = await arghun.getTotal(obj);
    assert.equal(result, expected, 'getTotal failed with counting');
    console.log("getTotal with counting - successful");
  }

  catch(err) {

    console.log(err);
    throw new Error(err);
  }
}

module.exports = getTotalCount;
