import test from 'ava';
import * as predicate from '../../src';

import {format} from "util";

var f = function ( x ) {
	return x < 3 ;
} ;

var g = predicate.negation( f ) ;

var one = function ( t, x ) {
	t.deepEqual( g( x ) , !f( x ) , format("g( %s ) === !f( %s )" , x , x ) ) ;
} ;

test( "negation" , t => {

	one( t, 1 ) ;
	one( t, 2 ) ;
	one( t, 3 ) ;
	one( t, 4 ) ;

} ) ;
