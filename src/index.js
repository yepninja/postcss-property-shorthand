'use strict';

const postcss = require('postcss');
const select = (syntax, prop) => {
    switch (syntax) {
    case 'css':
        return `var(--${prop})`;
    case 'scss':
        return `$${prop}`;
    case 'less':
        return `@${prop}`;
    default:
        return prop;
    }
};
const pluginName = 'postcss-property-shorthand';
const plugin = postcss.plugin(pluginName, ( { syntax = '' } = {} ) => {
    return (css) => {
        css.walkDecls(decl => {
            let { prop, value } = decl;
            if (value === '') {
                decl.value = select(syntax, prop);
            }
        });
    };
});

module.exports = plugin;
