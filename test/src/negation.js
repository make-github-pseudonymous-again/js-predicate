import test from 'ava';
import * as predicate from '../../src';

import util from "util" ;

var f = function ( x ) {
	return x < 3 ;
} ;

var F = predicate.negation( f ) ;

var one = function ( t, x ) {
	t.deepEqual( F( x ) , !f( x ) , util.format("F( %s ) === !f( %s )" , x , x ) ) ;
} ;

test( "negation" , t => {

	one( t, 1 ) ;
	one( t, 2 ) ;
	one( t, 3 ) ;
	one( t, 4 ) ;

} ) ;
