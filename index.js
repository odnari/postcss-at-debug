module.exports = (opts = { debug : true }) => {
    return {
        postcssPlugin: 'postcss-at-debug',
        AtRule: {
            debug: rule => {
                opts.debug && rule.each(node => {
                    rule.before(node);
                });
                rule.remove();
            }
        }
    };
};
module.exports.postcss = true;
