import test from 'ava';
import * as predicate from '#module';

test('operators', (t) => {
	const gt5 = predicate.gt(5);

	t.true(!gt5(4), '4 is not greater than 5');
	t.true(!gt5(5), '5 is not greater than 5');
	t.true(gt5(6), '6 is greater than 5');

	const ge5 = predicate.ge(5);

	t.true(!ge5(4), '4 is not greater than or equal to 5');
	t.true(ge5(5), '5 is greater than or equal to 5');
	t.true(ge5(6), '6 is greater than or equal to 5');

	const lt5 = predicate.lt(5);

	t.true(lt5(4), '4 is lower than 5');
	t.true(!lt5(5), '5 is not lower than 5');
	t.true(!lt5(6), '6 is not lower than 5');

	const le5 = predicate.le(5);

	t.true(le5(4), '4 is lower than or equal to 5');
	t.true(le5(5), '5 is lower than or equal to 5');
	t.true(!le5(6), '6 is not lower than or equal to 5');

	const eq5 = predicate.eq(5);

	t.true(!eq5(4), '4 is not equal to 5 (eq)');
	t.true(eq5(5), '5 is equal to 5 (eq)');
	t.true(!eq5(6), '6 is not equal to 5 (eq)');

	const ne5 = predicate.ne(5);

	t.true(ne5(4), '4 is not equal to 5 (ne)');
	t.true(!ne5(5), '5 is equal to 5 (ne)');
	t.true(ne5(6), '6 is not equal to 5 (ne)');
});
