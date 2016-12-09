'use strict';

const fs = require('fs');

async function readDir(path) {

	return new Promise( (resolve, reject) => {

		fs.readdir(path, function(err, result) {

			if (err) {
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
