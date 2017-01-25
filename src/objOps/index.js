'use strict';

const helpers = require('../helpers');

/**
 * Checks weather given string is present in a given array.
 * @param  {String}  str Value that has to be checked if it is blacklisted.
 * @param  {Array}  arr List of strings that a given str is validated against.
 *                      Regex values are supported.
 * @return {Boolean}
 */
function isBlacklisted(str, arr) {

  if (arr.findIndex(_strCheck) === -1) return false;

  return true;

  function _strCheck(el) {

    return str.match(el);
  }
}

/**
 * Depending on a given object. If it contains Numbers, then it is a sum value,
 * if Strings, then it is an array of strings.
 * @param  {Object} o Object with Number values or String values. Cannot be mixed.
 * @return {String/Array}
 */
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

/**
 * Depending on a given object.  If it contains Numbers, then returned object
 * contains sum values, if Strings, then returned object keys have arrays
 * of strings. Getting more reduced results from a given object basing
 * on a given pattern.
 * @param  {Object} o        Object that has to be reduced
 * @param  {Array} patterns  List of objects with name and pattern keys.
 *                           name becomes a key in returned object, while pattern
 *                           string is used to identify the same keys in o object
 *                           to sum them up under a given name.
 * @return {Object}
 */
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
