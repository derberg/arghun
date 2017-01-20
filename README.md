[![Build Status](https://travis-ci.org/derberg/arghun.svg?branch=master)](https://travis-ci.org/derberg/arghun)


![Arghun](arghun.png)

Blazingly fast and nifty directories traverser :)

* Zero dependencies
* Zero callbacks
* Node 7.x
* ES6 and beyond
* Clear and beautiful async-await

Traversing and listing of 101 files takes 0.02sec

Traversing and listing of 422241 files takes 96sec

### Quick start

1. `git clone https://github.com/derberg/arghun.git`
2. `cd arghun`
3. `npm install` (just kidding, there are no dependencies to install)
4. `npm run sample` or `SAMPLE_PATH='../' npm run sample`:
 * `SAMPLE_PATH`: Set path for traverse, default points to test sample data
 * `SAMPLE_OPT`: Set to true to use the options hardcoded in the sample file, default is {}
 * `SAMPLE_PATTERN`: Set to true to use the options hardcoded in the sample file, default is {}

### API

`arghun.walkDir(path[, opt])`

Arguments:
* `path` - Relative path to the dir you want to traverse
* `opt` - Object with more options like:
 * blFiles - Blacklist of files you not want to ignore during traversing
 * blDir - Blacking of dirs you want to ignore during traversing
 * dirMap - Instead of counting down the list of files in folders, set to `true` to get list of filenames

[Sample usage](samples/index.js)

### Run tests

`npm test`

### Debugging

To enable logging add the following environment variable: `ARGHUN_LOG=true`
