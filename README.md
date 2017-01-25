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

[Sample usage](samples/index.js)

#### `arghun.walkDir(path[, opt])`

Dir crawler that recursively per dir name lists all file names or sum number of those. Specific blacklists of dirs and files that should be ignored can be applied through the opt object.

Arguments:
* `path` - Path to the dir you want to traverse
* `opt` - Object with more options like:
 * blFiles - Blacklist of files you want to ignore during traversing
 * blDir - Blacking of dirs you want to ignore during traversing
 * dirMap - Instead of counting down the list of files in dirs, set to `true` to get array list of filenames

Sample result without options:
```
{ './test/testData/testDirectory/A-characters': 7,
  './test/testData/testDirectory/A-characters/even-more-A': 6,
  './test/testData/testDirectory/A-characters/how-abou-moreA': 6,
  './test/testData/testDirectory/G-characters': 7 }
```

Sample `opt` object:
```
{
  blFiles: ['^index\.', 'meta-inf', 'api.raml', 'apireference.html', 'client.zip', 'apiconsole.html'],
  blDir: ['.git', 'apiconsole', 'apinotebooks', 'blog', 'bower_components', 'build', 'error', 'fonts', 'images', 'img', 'internal', 'lunr', 'matrix', 'placeholders', 'scripts', 'styles', 'services/beta', 'services/eu', 'services/us', 'latest$', '/client', '/download', 'vendor'],
  dirMap: true
}
```

Sample result with filenames instead of total sum of files:
```
{ './test/testData/testDirectory/A-characters':
      [ 'Acros-Krik.txt',
        'AdmiralGialAckbar.html',
        'Ak-Rev.xml',
        'Almec.json',
        'AskAak.json',
        'MasAmedda.html',
        'StassAllie.raml' ],
     './test/testData/testDirectory/B-characters/more-B/inside-B': [ 'MinaBonteri.js', 'TheBendu.html' ],
     './test/testData/testDirectory/B-characters/more-B/inside-B/custom':
      [ 'BorvotheHutt.css',
        'Bossk.js',
        'Depa-Billable.json',
        'SioBibble.js' ],
     './test/testData/testDirectory/B-characters/my-man': [ 'BB-8.css' ],
     './test/testData/testDirectory/G-characters':
      [ 'Adi Gallia.js',
        'Commander Gree.raml',
        'Gardulla the Hutt.html',
        'Garindan.less',
        'Gonk droid.html',
        'Saw Gerrera.raml',
        'Yarna d\'al\' Gargan.js' ] }
```

#### `arghun.getTotal(o)`

Depending on a given object. If it contains Numbers, then it is a sum value, if Strings, then it is an array of strings.

Arguments:
* `o` - Object with Number values or String values. Cannot be mixed.

#### `arghun.getCustomDetails(o, patterns)`

Depending on a given object.  If it contains Numbers, then returned object contains sum values, if Strings, then returned object keys have arrays of strings. Getting more reduced results from a given object basing on a given pattern.

Arguments:
* `o` - Object that has to be reduced
* `patterns` - List of objects with name and pattern keys. `name` becomes a key in returned object, while `pattern` string is used to identify the same keys in `o` object to sum them up under a given `name`.

Sample patterns array:
```
[
  {
    "name": "A-characters",
    "pattern": "\/A-characters"
  },
  {
    "name": "B-characters",
    "pattern": "\/B-characters"
  },
  {
    "name": "C-characters",
    "pattern": "\/C-characters"
  }
]
```

Sample returned reduced object:
```
{
  'A-characters': 19,
  'B-characters': 18,
  'C-characters': 12
}
```

#### `arghun.isBlacklisted(str, arr)`

Checks weather given string is present in a given array

Arguments:
* `str` - Value that has to be checked if it is blacklisted.
* `arr` - List of strings that a given str is validated against. Regex values are supported.

### Run tests

`npm test`

### Debugging

To enable logging add the following environment variable: `ARGHUN_LOG=true`
