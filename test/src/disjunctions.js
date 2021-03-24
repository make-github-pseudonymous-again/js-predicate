import test from 'ava';
import * as predicate from '../../src/index.js';

import {format} from 'util';

const f = function (x) {
	return x < 3;
};

const g = function (x) {
	return x > 1 && x < 4;
};

const fg = predicate.disjunctions([f, g]);

const one = function (t, x) {
	t.deepEqual(
		fg(x),
		f(x) || g(x),
		format('fg( %s ) === f( %s ) || g( %s )', x, x, x),
	);
};

test('disjunctions', (t) => {
	one(t, 1);
	one(t, 2);
	one(t, 3);
	one(t, 4);
});
