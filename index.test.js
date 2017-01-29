const postcss = require('postcss');

const plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Remove debug at-rule in release mode', () => {
    return run('@debug { a { color: red; } }', '',
        {
            debug: false
        });
});

it('Keep debug at-rule in debug mode', () => {
    return run('@debug { a { color: red; } }', 'a {\n    color: red\n}',
        {
            debug: true
        });
});
