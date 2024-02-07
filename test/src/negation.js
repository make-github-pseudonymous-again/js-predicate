import test from 'ava';
import * as predicate from '#module';

const f = function (x) {
	return x < 3;
};

const g = predicate.negation(f);

const one = function (t, x) {
	t.deepEqual(g(x), !f(x), `g( ${x} ) === !f( ${x} )`);
};

test('negation', (t) => {
	one(t, 1);
	one(t, 2);
	one(t, 3);
	one(t, 4);
});
