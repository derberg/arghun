/*eslint no-console: "error" */
'use strict';

const fsOps = require('./fsOps'),
  objOps = require('./objOps');

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

    console.log(err);
  }
}

function _countDir(res, pathResult, path) {

  if (pathResult) {

    res[path] = ++pathResult;
  } else {

    res[path] = 1;
  }

  return res;
}

function _listDir(res, pathResult, path, name) {

  if (pathResult) {

    pathResult.push(name);
    res[path] = pathResult;
  } else {

    res[path] = [name];
  }

  return res;
}

module.exports = walkDir;
