/*eslint no-console: "error" */
'use strict';

const fsOps = require('./fsOps'),
  objOps = require('./objOps');
let result = {};

async function walkDir(path, opt){

  const pathStats = await fsOps.readInfo(path);

  try {

    if (pathStats.isFile()) return true;

    const dirContent = await fsOps.readDir(path);

    for (let i = 0; i < dirContent.length; i++) {

      const name = dirContent[i];
      const contentPath = `${path}/${name}`;

      if (opt && opt.blDir && objOps.isBlacklisted(path, opt.blDir)) break;

      let pathResult = result[path];
      const isFile = await walkDir(contentPath, opt);

      if (isFile === true){

        if (opt && opt.blFiles && objOps.isBlacklisted(name, opt.blFiles)) break;

        if (pathResult) {

          result[path] = ++pathResult;
          //for listing files instead of counting them
          //pathResult.push(name)
          //result[path] = pathResult;
        } else {

          result[path] = 1;
          //for listing files instead of counting them
          //result[path] = [name];
        }
      }
    }

    return result;
  }
  catch(err) {

    console.log(err);
  }
}

module.exports = walkDir;
