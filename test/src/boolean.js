import test from 'ava';
import * as predicate from '../../src';

test( "boolean" , t => {

	t.truthy( predicate.truth( ) , "truth" ) ;
	t.truthy( !predicate.untruth( ) , "untruth" ) ;

} ) ;
