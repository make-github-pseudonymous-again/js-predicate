import test from 'ava';
import * as predicate from '../../src';

test( "divides" , t => {

	var p = predicate.divides( 12 ) ;

	t.truthy( !p( 0 ) , "0 does not divide 12" ) ;
	t.truthy( p( 1 ) , "1 divides 12" ) ;
	t.truthy( p( 2 ) , "2 divides 12" ) ;
	t.truthy( p( 3 ) , "3 divides 12" ) ;
	t.truthy( p( 4 ) , "4 divides 12" ) ;
	t.truthy( !p( 5 ) , "5 does not divide 12" ) ;
	t.truthy( p( 6 ) , "6 divides 12" ) ;
	t.truthy( !p( 7 ) , "7 does not divide 12" ) ;
	t.truthy( !p( 8 ) , "8 does not divide 12" ) ;
	t.truthy( !p( 9 ) , "9 does not divide 12" ) ;
	t.truthy( !p( 10 ) , "10 does not divide 12" ) ;
	t.truthy( !p( 11 ) , "11 does not divide 12" ) ;
	t.truthy( p( 12 ) , "12 divides 12" ) ;
	t.truthy( !p( 13 ) , "13 does not divide 12" ) ;

} ) ;

test( "isdivisible" , t => {

	t.truthy( !predicate.divisible( 0 )( 12 ) , "0 does not divide 12" ) ;
	t.truthy( predicate.divisible( 1 )( 12 ) , "1 divides 12" ) ;
	t.truthy( predicate.divisible( 2 )( 12 ) , "2 divides 12" ) ;
	t.truthy( predicate.divisible( 3 )( 12 ) , "3 divides 12" ) ;
	t.truthy( predicate.divisible( 4 )( 12 ) , "4 divides 12" ) ;
	t.truthy( !predicate.divisible( 5 )( 12 ) , "5 does not divide 12" ) ;
	t.truthy( predicate.divisible( 6 )( 12 ) , "6 divides 12" ) ;
	t.truthy( !predicate.divisible( 7 )( 12 ) , "7 does not divide 12" ) ;
	t.truthy( !predicate.divisible( 8 )( 12 ) , "8 does not divide 12" ) ;
	t.truthy( !predicate.divisible( 9 )( 12 ) , "9 does not divide 12" ) ;
	t.truthy( !predicate.divisible( 10 )( 12 ) , "10 does not divide 12" ) ;
	t.truthy( !predicate.divisible( 11 )( 12 ) , "11 does not divide 12" ) ;
	t.truthy( predicate.divisible( 12 )( 12 ) , "12 divides 12" ) ;
	t.truthy( !predicate.divisible( 13 )( 12 ) , "13 does not divide 12" ) ;

} ) ;
