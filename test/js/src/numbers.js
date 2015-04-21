
test( "divides" , function ( ) {

	var p = predicate.divides( 12 ) ;

	ok( !p( 0 ) , "0 does not divide 12" ) ;
	ok( p( 1 ) , "1 divides 12" ) ;
	ok( p( 2 ) , "2 divides 12" ) ;
	ok( p( 3 ) , "3 divides 12" ) ;
	ok( p( 4 ) , "4 divides 12" ) ;
	ok( !p( 5 ) , "5 does not divide 12" ) ;
	ok( p( 6 ) , "6 divides 12" ) ;
	ok( !p( 7 ) , "7 does not divide 12" ) ;
	ok( !p( 8 ) , "8 does not divide 12" ) ;
	ok( !p( 9 ) , "9 does not divide 12" ) ;
	ok( !p( 10 ) , "10 does not divide 12" ) ;
	ok( !p( 11 ) , "11 does not divide 12" ) ;
	ok( p( 12 ) , "12 divides 12" ) ;
	ok( !p( 13 ) , "13 does not divide 12" ) ;

} ) ;

test( "isdivisible" , function ( ) {

	ok( !predicate.divisible( 0 )( 12 ) , "0 does not divide 12" ) ;
	ok( predicate.divisible( 1 )( 12 ) , "1 divides 12" ) ;
	ok( predicate.divisible( 2 )( 12 ) , "2 divides 12" ) ;
	ok( predicate.divisible( 3 )( 12 ) , "3 divides 12" ) ;
	ok( predicate.divisible( 4 )( 12 ) , "4 divides 12" ) ;
	ok( !predicate.divisible( 5 )( 12 ) , "5 does not divide 12" ) ;
	ok( predicate.divisible( 6 )( 12 ) , "6 divides 12" ) ;
	ok( !predicate.divisible( 7 )( 12 ) , "7 does not divide 12" ) ;
	ok( !predicate.divisible( 8 )( 12 ) , "8 does not divide 12" ) ;
	ok( !predicate.divisible( 9 )( 12 ) , "9 does not divide 12" ) ;
	ok( !predicate.divisible( 10 )( 12 ) , "10 does not divide 12" ) ;
	ok( !predicate.divisible( 11 )( 12 ) , "11 does not divide 12" ) ;
	ok( predicate.divisible( 12 )( 12 ) , "12 divides 12" ) ;
	ok( !predicate.divisible( 13 )( 12 ) , "13 does not divide 12" ) ;

} ) ;
