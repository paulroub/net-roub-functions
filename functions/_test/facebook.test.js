const digger = require('../modules/digger');

test('returns empty metadata for an empty head', () => {
    expect(digger.metadata('')).toEqual({});
});

test('returns facebook title', () => {
    const html = `<html><head><meta property="og:title" content="this is my title" /></head></html>`;
    expect(digger.metadata(html).title).toEqual('this is my title');
});

test('returns facebook description', () => {
    const html = `<html><head><meta property="og:description" content="this is my description" /></head></html>`;
    expect(digger.metadata(html).description).toEqual('this is my description');
});

test('returns facebook image', () => {
    const html = `<html><head><meta property="og:image" content="http://example.com/foo.png" /></head></html>`;
    expect(digger.metadata(html).image).toEqual('http://example.com/foo.png');
});
