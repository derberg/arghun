/*eslint require-yield: "error" */
'use strict';

const fs = require('fs'),
	helpers = require('../helpers');


async function readDir(path) {

	return new Promise( (resolve, reject) => {

		fs.readdir(path, function(err, result) {

			if (err) {
				helpers.log(err);
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}

function readInfo(path) {

	return new Promise( (resolve, reject) => {

		fs.stat(path, function(err, result) {

			if (err) {
				helpers.log(err);
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}

const fsOps = {
  readDir,
  readInfo
};

module.exports = fsOps;
