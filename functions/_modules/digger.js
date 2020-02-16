const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function lookupMetadata(html) {
    const dom = new JSDOM(html);
    const head = dom.window.document.head;

    const facebookTags = lookupFacebookMetadata(head);
    const twitterTags = lookupTwitterMetadata(head);

    return Object.assign(facebookTags, twitterTags);
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

function lookupTwitterMetadata(head) {
    const metaTags = [...head.querySelectorAll('meta[property^="twitter:"]')];
    const metadata = {};

    metaTags.forEach((tag) => {
        const property = tag.getAttribute('property').replace(/^twitter:/, '');
        const content = tag.getAttribute('content');

        metadata[property] = content;
    });

    return metadata;
}

exports.metadata = lookupMetadata;

