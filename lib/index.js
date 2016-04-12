'use strict';

var postcss = require('postcss');
var select = function select(syntax, prop) {
    switch (syntax) {
        case 'css':
            return 'var(--' + prop + ')';
        case 'scss':
            return '$' + prop;
        case 'less':
            return '@' + prop;
        default:
            return prop;
    }
};
var plugin = postcss.plugin('postcss-property-shorthand', function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$syntax = _ref.syntax;
    var syntax = _ref$syntax === undefined ? '' : _ref$syntax;


    return function (css) {
        css.walkDecls(function (decl) {
            var prop = decl.prop;
            var value = decl.value;


            if (value === '') {
                decl.value = select(syntax, prop);
            }
        });
    };
});

module.exports = plugin;