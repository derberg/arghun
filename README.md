[![Build Status](https://travis-ci.org/derberg/arghun.svg?branch=master)](https://travis-ci.org/derberg/arghun)


![Arghun](arghun.png)

Blazingly fast and nifty directories traverser :)

* Zero dependencies
* Zero callback
* Node 7.x
* Clear and beautiful async-await

### Quick start

1. git clone https://github.com/derberg/zlicz.git
2. cd zlicz
3. npm install (just kidding, there are no dependencies to install)
4. npm run sample (for now hardcoded to the following dir `../devportal/devportal/tmp/latestResultRepo`. Patience my padawan)

### API

`zlicz.WalkDir(path[, opt])`

Arguments:
* `path` - Relative path to the dir you want to traverse
* `opt` - Object with additional options like:
 * blFiles - Blacklist of files you not want to ignore during traversing
 * blDir - Blacking of dirs you want to ignore during traversing

[Sample usage](samples/index.js)

### Run tests

`npm test`
