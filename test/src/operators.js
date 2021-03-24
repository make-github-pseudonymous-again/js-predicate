import test from 'ava';
import * as predicate from '../../src';

test( "operators" , t => {

	var gt5 = predicate.gt( 5 ) ;

	t.truthy( !gt5( 4 ) , "4 is not greater than 5" ) ;
	t.truthy( !gt5( 5 ) , "5 is not greater than 5" ) ;
	t.truthy( gt5( 6 ) , "6 is greater than 5" ) ;

	var ge5 = predicate.ge( 5 ) ;

	t.truthy( !ge5( 4 ) , "4 is not greater than or equal to 5" ) ;
	t.truthy( ge5( 5 ) , "5 is greater than or equal to 5" ) ;
	t.truthy( ge5( 6 ) , "6 is greater than or equal to 5" ) ;

	var lt5 = predicate.lt( 5 ) ;

	t.truthy( lt5( 4 ) , "4 is lower than 5" ) ;
	t.truthy( !lt5( 5 ) , "5 is not lower than 5" ) ;
	t.truthy( !lt5( 6 ) , "6 is not lower than 5" ) ;

	var le5 = predicate.le( 5 ) ;

	t.truthy( le5( 4 ) , "4 is lower than or equal to 5" ) ;
	t.truthy( le5( 5 ) , "5 is lower than or equal to 5" ) ;
	t.truthy( !le5( 6 ) , "6 is not lower than or equal to 5" ) ;

	var eq5 = predicate.eq( 5 ) ;

	t.truthy( !eq5( 4 ) , "4 is not equal to 5 (eq)" ) ;
	t.truthy( eq5( 5 ) , "5 is equal to 5 (eq)" ) ;
	t.truthy( !eq5( 6 ) , "6 is not equal to 5 (eq)" ) ;

	var ne5 = predicate.ne( 5 ) ;

	t.truthy( ne5( 4 ) , "4 is not equal to 5 (ne)" ) ;
	t.truthy( !ne5( 5 ) , "5 is equal to 5 (ne)" ) ;
	t.truthy( ne5( 6 ) , "6 is not equal to 5 (ne)" ) ;

} ) ;
