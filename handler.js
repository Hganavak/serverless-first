'use strict';

module.exports.hello = async event => {

  // If its a POST request and it contains a body
  if(event.httpMethod === "POST") {

    // let json = JSON.parse(event.body);
    let json = event.body;

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hi, you sent me POST:',
          object: json
        },
        null,
        2
      ),
    };
  }

  // If people have passed a name URL param
  if(event.queryStringParameters && event.queryStringParameters.name) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Sup ' + event.queryStringParameters.name + ', nice to meet you!',
        },
        null,
        2
      ),
    };
  }


  // Use this code if you want to use the LAMBDA-PROXY integration
  // This allows you to control API-Gateway within your Lambda functionk
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Sam was here.',
        input: event, // Shows the event that the Lambda function received (headers, resource, path, method, pathParameters, stageVariables)
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
