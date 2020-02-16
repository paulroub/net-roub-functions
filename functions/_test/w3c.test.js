const digger = require('../_modules/digger');

test('returns page title', () => {
    const html = `<html><head><title>this is my title</title></html>`;
    expect(digger.metadata(html).title).toEqual('this is my title');
});

test('returns page description', () => {
    const html = `<html><head><meta name="description" content="this is my description" /></head></html>`;
    expect(digger.metadata(html).description).toEqual('this is my description');
});

test('returns first image on page', () => {
    const html = `<html><body><img src=http://example.com/foo2.png /></body></html>`;
    expect(digger.metadata(html).image).toEqual('http://example.com/foo2.png');
});