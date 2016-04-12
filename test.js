import postcss from 'postcss';
import test    from 'ava';

import plugin from './lib';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

test('change empty property with property name', t => {
    return run(
        t,
        'a{ transition:; }',
        'a{ transition:transition; }',
        { });
});

test('change empty property to scss variable', t => {
    return run(
        t,
        'a{ transition:; }',
        'a{ transition:$transition; }',
        { syntax: 'scss' }
    );
});

test('change empty property to css custom property variable', t => {
    return run(
        t,
        'a{ transition:; }',
        'a{ transition:var(--transition); }',
        { syntax: 'css' }
    );
});

test('change empty property to less variable', t => {
    return run(
        t,
        'a{ transition:; }',
        'a{ transition:@transition; }',
        { syntax: 'less' }
    );
});
