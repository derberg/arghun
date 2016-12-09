'use strict';

function getTotal(o) {

  let total = 0;

  Object.keys(o).forEach((key) => {
    total = total + o[key];
  });

  return total;
}

function isBlacklisted(str, arr) {

  if (arr.findIndex(_strCheck) === -1) return false;

  return true;

  function _strCheck(el) {

    return str.match(el);
  }
}

const objOps = {
  getTotal,
  isBlacklisted
};

module.exports = objOps;
