const digger = require('../_modules/digger');

test('facebook overrides twitter', () => {
    const html = `<html><head>
        <meta property="og:title" content="facebook title" />
        <meta name="twitter:title" content="twitter title" />
        <meta property="og:description" content="facebook description" />
        <meta name="twitter:description" content="twitter description" />
        <meta property="og:image" content="facebook image" />
        <meta name="twitter:image" content="twitter image" />
    </head>`;
    expect(digger.metadata(html)).toEqual({
        title: 'facebook title',
        description: 'facebook description',
        image: 'facebook image'
    });
});

test('facebook overrides page', () => {
    const html = `<html><head>
        <meta property="og:title" content="facebook title" />
        <meta property="og:description" content="facebook description" />
        <meta property="og:image" content="facebook image" />
        <meta name="description" content="page description" />
        <title>page title</title>
    </head>`;
    expect(digger.metadata(html)).toEqual({
        title: 'facebook title',
        description: 'facebook description',
        image: 'facebook image'
    });
});

