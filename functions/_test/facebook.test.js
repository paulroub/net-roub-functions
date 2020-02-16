const digger = require('../_modules/digger');

test('returns empty metadata for an empty head', () => {
    expect(digger.metadata('')).toEqual({});
});

test('returns facebook title', () => {
    const html = `<html><head><meta property="og:title" content="Test-driven Development: CodeMash" /></head></html>`;
    expect(digger.metadata(html).title).toEqual('Test-driven Development: CodeMash');
});