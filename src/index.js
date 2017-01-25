'use strict';

const fsOps = require('./fsOps'),
  objOps = require('./objOps'),
  helpers = require('./helpers');

/**
 * Dir crawler that recursively per dir name lists all file names or sum number
 * of those. Specific blacklists of dirs and files that should be ignored can be
 * applied through the opt object
 * @param  {String}  path Path to a directory that is to be crawled
 * @param  {Object}  opt  Object that can contain 3 different keys:
 *                        blFiles - Array with filenames that are blacklisted
 *                        and should be ignored during crawling. Regex is supported.
 *                        blDir - Array with directories that are blacklisted
 *                        and should be ignored during crawling. Regex is supported.
 *                        dirMap - By default function returns an object with lists
 *                        of all dirs and sum number of files in it. By setting
 *                        this option to true, you change this behaviour and
 *                        instead of sum, the array of filenames becomes a value.
 * @return {Promise}
 */
async function walkDir(path, opt){

  try {
    let result = {};
    const pathStats = await fsOps.readInfo(path);
    if (pathStats.isFile()) return true;

    const dirContent = await fsOps.readDir(path);

    for (let i = 0; i < dirContent.length; i++) {

      if (opt && opt.blDir && objOps.isBlacklisted(path, opt.blDir)) break;

      const name = dirContent[i];
      const contentPath = `${path}/${name}`;
      const isFile = await walkDir(contentPath, opt);
      const pathResult = result[path];

      if (isFile === true){

        if (opt && opt.blFiles && objOps.isBlacklisted(name, opt.blFiles)) continue;

        result = (opt && opt.dirMap)
          ? _listDir(result, pathResult, path, name)
          : _countDir(result, pathResult, path);
      }
      else {

        Object.assign(result, isFile);
      }
    }

    return result;
  }
  catch(err) {

    helpers.log('Failed during traversing directories', err);
  }
}

function _countDir(res, pathResult, path) {

  if (pathResult) {

    res[path] = ++pathResult;
  }
  else {

    res[path] = 1;
  }

  return res;
}

function _listDir(res, pathResult, path, name) {

  if (pathResult) {

    pathResult.push(name);
    res[path] = pathResult;
  }
  else {

    res[path] = [name];
  }

  return res;
}

module.exports = walkDir;
