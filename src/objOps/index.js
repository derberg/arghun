'use strict';

const helpers = require('../helpers');

function isBlacklisted(str, arr) {

  if (arr.findIndex(_strCheck) === -1) return false;

  return true;

  function _strCheck(el) {

    return str.match(el);
  }
}

function getTotal(o) {

  if (!o) {

    helpers.log('There is no object provided', o);
    return;
  }

  let isNum;

  const total = Object.values(o).reduce((a, b) => {

    isNum = Number.isInteger(b);

    return isNum
      ?  a + b
      :  a.concat(b);
  });

  return total;
}

function getCustomDetails(o, patterns) {

  if (!o || !patterns) {
    
    helpers.log('There is no object or patterns provided', o);
    return;
  }

  const oKeys = Object.keys(o),
    detailsSum = {},
    isNum = Number.isInteger(o[oKeys[0]]),
    initialVal = isNum ? 0 : [];
  let isMatchPattern;

  return patterns.reduce( (detailsSum, el) => {

    const total = oKeys.reduce((sum, b) => {

      isMatchPattern = b.match(el.pattern);

      if(isMatchPattern)
        isNum
          ?  sum += o[b]
          :  sum = sum.concat(o[b]);

      return sum;

    }, initialVal);

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
