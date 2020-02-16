const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function lookupMetadata(html) {
    const dom = new JSDOM(html);
    const head = dom.window.document.head;

    const facebookTags = lookupFacebookMetadata(head);

    return facebookTags;
}

function lookupFacebookMetadata(head) {
    const metaTags = [...head.querySelectorAll('meta[property^="og:"]')];
    const metadata = {};

    metaTags.forEach((tag) => {
        const property = tag.getAttribute('property').replace(/^og:/, '');
        const content = tag.getAttribute('content');

        metadata[property] = content;
    });

    return metadata;
}

exports.metadata = lookupMetadata;

