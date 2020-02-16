const digger = require('../_modules/digger');

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

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: digger.metadata(url)
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
