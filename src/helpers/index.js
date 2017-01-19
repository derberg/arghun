/*eslint no-console: "error" */
'use strict';

function log(msg, moreMsg){

  if (!msg) {

    console.log('No message for logger provided');
    return;
  }

  if (process.env.NODE_ENV === 'debug') {

    moreMsg ? console.log(msg, moreMsg) : console.log(msg);
  }

}

function logTime(id){

  if (!id) {

    console.log('Log time id must be provided');
    return;
  }

  if (process.env.NODE_ENV === 'debug') console.time(id);

}

function logTimeEnd(id){

  if (!id) {

    console.log('Log time id must be provided');
    return;
  }

  if (process.env.NODE_ENV === 'debug') console.timeEnd(id);

}

const helpers = {
  log,
  logTime,
  logTimeEnd
};

module.exports = helpers;
