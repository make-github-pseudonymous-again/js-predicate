import test from 'ava';
import * as predicate from '#module';

const f = function (x) {
	return x < 3;
};

const g = function (x) {
	return x > 1 && x < 4;
};

const fg = predicate.disjunctions([f, g]);

const one = function (t, x) {
	t.deepEqual(fg(x), f(x) || g(x), `fg( ${x} ) === f( ${x} ) || g( ${x} )`);
};

test('disjunctions', (t) => {
	one(t, 1);
	one(t, 2);
	one(t, 3);
	one(t, 4);
});
