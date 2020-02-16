const digger = require('../_modules/digger');

test('returns empty metadata for an empty head', () => {
    expect(digger.metadata('')).toEqual('');
});