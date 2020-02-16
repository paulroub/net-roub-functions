const digger = require('../_modules/digger');

test('returns twitter title', () => {
    const html = `<html><head><meta name="twitter:title" content="this is my title" /></head></html>`;
    expect(digger.metadata(html).title).toEqual('this is my title');
});

test('returns twitter description', () => {
    const html = `<html><head><meta name="twitter:description" content="this is my description" /></head></html>`;
    expect(digger.metadata(html).description).toEqual('this is my description');
});

test('returns twitter image', () => {
    const html = `<html><head><meta name="twitter:image" content="http://example.com/foo.png" /></head></html>`;
    expect(digger.metadata(html).image).toEqual('http://example.com/foo.png');
});
