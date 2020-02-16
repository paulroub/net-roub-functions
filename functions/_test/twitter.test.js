const digger = require('../_modules/digger');

test('returns empty metadata for an empty head', () => {
    expect(digger.metadata('')).toEqual({});
});

test('returns twitter title', () => {
    const html = `<html><head><meta property="twitter:title" content="this is my title" /></head></html>`;
    expect(digger.metadata(html).title).toEqual('this is my title');
});

test('returns twitter description', () => {
    const html = `<html><head><meta property="twitter:description" content="this is my description" /></head></html>`;
    expect(digger.metadata(html).description).toEqual('this is my description');
});

test('returns twitter image', () => {
    const html = `<html><head><meta property="twitter:image" content="http://example.com/foo.png" /></head></html>`;
    expect(digger.metadata(html).image).toEqual('http://example.com/foo.png');
});