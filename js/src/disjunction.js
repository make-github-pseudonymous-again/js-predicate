
var disjunction = function ( predicates ) {

	return function ( input ) {

		var i , len ;

		for ( i = 0 , len = predicates.length ; i < len ; ++i ) {

			if ( predicates[i]( input ) ) {

				return true ;

			}

		}

		return false ;

	} ;

} ;

exports.disjunction = disjunction ;

