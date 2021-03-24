
test( "operators" , function ( ) {

	var gt5 = predicate.gt( 5 ) ;

	ok( !gt5( 4 ) , "4 is not greater than 5" ) ;
	ok( !gt5( 5 ) , "5 is not greater than 5" ) ;
	ok( gt5( 6 ) , "6 is greater than 5" ) ;

	var ge5 = predicate.ge( 5 ) ;

	ok( !ge5( 4 ) , "4 is not greater than or equal to 5" ) ;
	ok( ge5( 5 ) , "5 is greater than or equal to 5" ) ;
	ok( ge5( 6 ) , "6 is greater than or equal to 5" ) ;

	var lt5 = predicate.lt( 5 ) ;

	ok( lt5( 4 ) , "4 is lower than 5" ) ;
	ok( !lt5( 5 ) , "5 is not lower than 5" ) ;
	ok( !lt5( 6 ) , "6 is not lower than 5" ) ;

	var le5 = predicate.le( 5 ) ;

	ok( le5( 4 ) , "4 is lower than or equal to 5" ) ;
	ok( le5( 5 ) , "5 is lower than or equal to 5" ) ;
	ok( !le5( 6 ) , "6 is not lower than or equal to 5" ) ;

	var eq5 = predicate.eq( 5 ) ;

	ok( !eq5( 4 ) , "4 is not equal to 5 (eq)" ) ;
	ok( eq5( 5 ) , "5 is equal to 5 (eq)" ) ;
	ok( !eq5( 6 ) , "6 is not equal to 5 (eq)" ) ;

	var ne5 = predicate.ne( 5 ) ;

	ok( ne5( 4 ) , "4 is not equal to 5 (ne)" ) ;
	ok( !ne5( 5 ) , "5 is equal to 5 (ne)" ) ;
	ok( ne5( 6 ) , "6 is not equal to 5 (ne)" ) ;

} ) ;
