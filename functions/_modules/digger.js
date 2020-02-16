const {JSDOM} = require("jsdom");

function lookupMetadata(html) {
    const dom = new JSDOM(html);
    const head = dom.window.document.head;

    const facebookTags = lookupFacebookMetadata(head);
    const twitterTags = lookupTwitterMetadata(head);
    const pageTags = lookupPageMetadata(head);

    return Object.assign(pageTags, twitterTags, facebookTags);
}

function lookupPageMetadata(head) {
    const metadata = {};

    const title = head.querySelector('title');
    const description = head.querySelector('meta[name="description"]');

    if (title) {
        metadata.title = title.textContent;
    }
    if (description) {
        metadata.description = description.getAttribute('content');
    }

    return metadata;
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
    const metaTags = [...head.querySelectorAll('meta[name^="twitter:"]')];
    const metadata = {};

    metaTags.forEach((tag) => {
        const property = tag.getAttribute('name').replace(/^twitter:/, '');
        const content = tag.getAttribute('content');

        metadata[property] = content;
    });

    return metadata;
}

exports.metadata = lookupMetadata;

