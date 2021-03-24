import test from 'ava';
import * as predicate from '../../src/index.js';

test('divides', (t) => {
	const p = predicate.divides(12);

	t.true(!p(0), '0 does not divide 12');
	t.true(p(1), '1 divides 12');
	t.true(p(2), '2 divides 12');
	t.true(p(3), '3 divides 12');
	t.true(p(4), '4 divides 12');
	t.true(!p(5), '5 does not divide 12');
	t.true(p(6), '6 divides 12');
	t.true(!p(7), '7 does not divide 12');
	t.true(!p(8), '8 does not divide 12');
	t.true(!p(9), '9 does not divide 12');
	t.true(!p(10), '10 does not divide 12');
	t.true(!p(11), '11 does not divide 12');
	t.true(p(12), '12 divides 12');
	t.true(!p(13), '13 does not divide 12');
});

test('isdivisible', (t) => {
	t.true(!predicate.divisible(0)(12), '0 does not divide 12');
	t.true(predicate.divisible(1)(12), '1 divides 12');
	t.true(predicate.divisible(2)(12), '2 divides 12');
	t.true(predicate.divisible(3)(12), '3 divides 12');
	t.true(predicate.divisible(4)(12), '4 divides 12');
	t.true(!predicate.divisible(5)(12), '5 does not divide 12');
	t.true(predicate.divisible(6)(12), '6 divides 12');
	t.true(!predicate.divisible(7)(12), '7 does not divide 12');
	t.true(!predicate.divisible(8)(12), '8 does not divide 12');
	t.true(!predicate.divisible(9)(12), '9 does not divide 12');
	t.true(!predicate.divisible(10)(12), '10 does not divide 12');
	t.true(!predicate.divisible(11)(12), '11 does not divide 12');
	t.true(predicate.divisible(12)(12), '12 divides 12');
	t.true(!predicate.divisible(13)(12), '13 does not divide 12');
});
