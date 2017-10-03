'use strict';

module.exports.successNotifier = (event, context, callback) => {

  console.log("Inside successNotifier");
  console.log("Printing SNS message: ", event["Records"][0]["Sns"]["Message"]);
  console.log("Printing the whole event");
  console.log(event);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'CodeBuild Success',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
