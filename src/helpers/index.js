/*eslint no-console: "error" */
'use strict';

/**
 * console.log wrapper that makes sure log is displayed only with environment
 * variable ARGHUN_LOG=true
 * @param  {String} msg     Log message
 * @param  {String} moreMsg Additional log message
 */
function log(msg, moreMsg){

  if (!msg) {
    console.
    console.log('No message for logger provided');
    return;
  }

  if (process.env.ARGHUN_LOG === 'true') {

    moreMsg ? console.log(msg, moreMsg) : console.log(msg);
  }

}

/**
 * console.time wrapper that makes sure log is used only with environment
 * variable ARGHUN_LOG=true
 * @param  {String} msg     Log identifier
 */
function logTime(id){

  if (!id) {

    console.log('Log time id must be provided');
    return;
  }

  if (process.env.ARGHUN_LOG === 'true') console.time(id);

}

/**
 * console.timeEnd wrapper that makes sure log is used only with environment
 * variable ARGHUN_LOG=true
 * @param  {String} msg     Log identifier that must be the same as the one used
 *                          in logTime function
 */
function logTimeEnd(id){

  if (!id) {

    console.log('Log time id must be provided');
    return;
  }

  if (process.env.ARGHUN_LOG === 'true') console.timeEnd(id);

}

const helpers = {
  log,
  logTime,
  logTimeEnd
};

module.exports = helpers;
