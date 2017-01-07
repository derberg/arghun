/*eslint no-console: "error" */
'use strict';

const assert = require('assert');
const arghun = require('../../');
const opt = {
  blFiles: ['\.raml', 'Commander', '\.css']
};
const expected =  { './test/testData/A-characters': 6,
     './test/testData/A-characters/even-more-A': 5,
     './test/testData/A-characters/how-abou-moreA': 4,
     './test/testData/B-characters': 6,
     './test/testData/B-characters/crap': 1,
     './test/testData/B-characters/even-more-B': 1,
     './test/testData/B-characters/more-B': 3,
     './test/testData/B-characters/more-B/inside-B': 2,
     './test/testData/B-characters/more-B/inside-B/custom': 3,
     './test/testData/C-characters': 5,
     './test/testData/C-characters/even-more-c': 3,
     './test/testData/C-characters/my-man': 2,
     './test/testData/D-characters': 4,
     './test/testData/D-characters/even-more-d': 5,
     './test/testData/D-characters/more-and-more-D': 6,
     './test/testData/D-characters/my-man': 1,
     './test/testData/E-characters': 12,
     './test/testData/F-characters': 4,
     './test/testData/F-characters/even-more-f': 4,
     './test/testData/F-characters/moremoremore': 2,
     './test/testData/F-characters/my-man': 1,
     './test/testData/G-characters': 5 };

async function walkDirBlacklistFiles(path) {

  try {

    const result = await arghun.walkDir(path, opt);
    assert.deepEqual(result, expected, 'walkDir failed with files blacklist');
  }

  catch(err) {

    console.log(err);
    throw new Error(err);
  }
}

module.exports = walkDirBlacklistFiles;
