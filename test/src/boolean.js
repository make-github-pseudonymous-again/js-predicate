import test from 'ava';
import * as predicate from '#module';

test('boolean', (t) => {
	t.true(predicate.truth(), 'truth');
	t.true(!predicate.untruth(), 'untruth');
});
