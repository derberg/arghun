'use strict';

function getTotal(o) {

  let isNum;

  const total = Object.values(o).reduce((a, b) => {

    isNum = Number.isInteger(b);

    return isNum
      ?  a + b
      :  a.concat(b);
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

function getCustomDetails(o, details) {

  const detailsSum = {};

  return details.reduce( (detailsSum, el) => {

    let total = 0;

    Object.keys(o).forEach((key) => {

      if (key.match(el.pattern)) total = total + o[key];
    });

    detailsSum[el.name] = total;

    return detailsSum;
  }, {});
}

const objOps = {
  getTotal,
  isBlacklisted,
  getCustomDetails
};

module.exports = objOps;
