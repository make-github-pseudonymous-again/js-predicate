import test from 'ava';
import * as predicate from '../../src';

import util from "util" ;

var f = function ( x ) {
	return x < 3 ;
} ;


var g = function ( x ) {
	return x > 1 && x < 4 ;
} ;

var fg = predicate.disjunctions( [ f , g ] ) ;

var one = function ( x ) {
	t.deepEqual( fg( x ) , f( x ) ||  g( x ) , util.format("fg( %s ) === f( %s ) || g( %s )" , x , x , x ) ) ;
} ;

test( "disjunctions" , t => {

	one( 1 ) ;
	one( 2 ) ;
	one( 3 ) ;
	one( 4 ) ;

} ) ;
