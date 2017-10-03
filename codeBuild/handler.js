/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
if (!global._babelPolyfill) require('babel-polyfill');

import axios from 'axios';

module.exports.successNotifier = (event, context, callback) => {

  console.log("Inside successNotifier");
  console.log("Printing SNS message: ", event["Records"][0]["Sns"]["Message"]);
  console.log("Printing the whole event");
  console.log(event);

  const options = {
    text: event["Records"][0]["Sns"]["Message"].replace(/^"(.*)"$/, '$1'),
  };

  axios.post(process.env.SUCCESS_SLACK_CHANNEL, JSON.stringify(options))
  .then((response) => {
    console.log('\nSUCCEEDED: Slack Message to Success Channel: \n', response.data);
    callback(null, 'SUCCEEDED: Slack Message to Success Channel');
  })
  .catch((error) => {
    console.log('\nFAILED: Slack Message to Success Channel', error);
    callback(error);
  });

};

module.exports.failureNotifier = (event, context, callback) => {

  console.log("Inside failureNotifier");
  console.log("Printing SNS message: ", event["Records"][0]["Sns"]["Message"]);
  console.log("Printing the whole event");
  console.log(event);

  const options = {
    text: event["Records"][0]["Sns"]["Message"].replace(/^"(.*)"$/, '$1'),
  };

  axios.post(process.env.FAILURE_SLACK_CHANNEL, JSON.stringify(options))
  .then((response) => {
    console.log('\nSUCCEEDED: Slack Message to Failure Channel: \n', response.data);
    callback(null, 'SUCCEEDED: Slack Message to Failure Channel');
  })
  .catch((error) => {
    console.log('\nFAILED: Slack Message to Failure Channel', error);
    callback(error);
  });

};
