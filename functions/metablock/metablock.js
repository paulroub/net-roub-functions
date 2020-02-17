const digger = require('../_modules/digger');
const request = require('request');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event) => {
  try {
    const url = event.queryStringParameters.url;

    if (!url) {
      return {
        statusCode: 400,
        body: "No url specified"
      };
    }

    const body = await(ajax(url));

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: digger.metadata(body)
      })
    };
  }
  catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
};

async function ajax(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(body);
      }
    });
  });
}
