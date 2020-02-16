const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function lookupMetadata(html) {
    const dom = new JSDOM(html);
    const head = dom.window.document.head;

    const meta = head.querySelector('meta[property="og:title"]');

    if (meta) {
        return {
            title: meta.getAttribute('content')
        };
    }

    return {};
}

exports.metadata = lookupMetadata;

