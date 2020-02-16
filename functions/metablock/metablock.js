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

    const html = '<html><head><title>My title!</title></head></html>';

    const body = await(ajax(url));

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: digger.metadata(html)
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
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        const DONE = 4;
        const OK = 200;

        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                if (success) {
                    success(xhr.responseText);
                }
            }
            else if (failure) {
                failure(xhr.status);
            }
        }
    };
    xhr.open('GET', url);
    xhr.send(null);
  });
}
