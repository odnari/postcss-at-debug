const postcss = require('postcss');
const DEBUGATRULENAME = 'debug';

module.exports = postcss.plugin('postcss-at-debug', function (opts) {
    opts = opts || {
        debug: false
    };

    return function (root) {
        root.walkAtRules(DEBUGATRULENAME, rule => {
            if (opts.debug) {
                rule.nodes.forEach(node => {
                    rule.parent.insertBefore(rule, node);
                });
            }

            rule.remove();
        });
    };
});
