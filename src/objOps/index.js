'use strict';

function isBlacklisted(str, arr) {

  if (arr.findIndex(_strCheck) === -1) return false;

  return true;

  function _strCheck(el) {

    return str.match(el);
  }
}

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

function getCustomDetails(o, patterns) {

  const oKeys = Object.keys(o);
  const detailsSum = {};
  const isNum = Number.isInteger(o[oKeys[0]]);
  const initialVal = isNum ? 0 : [];
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
