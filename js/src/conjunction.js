
var conjunction = function ( predicates ) {

	return function ( input ) {

		var i , len ;

		for ( i = 0 , len = predicates.length ; i < len ; ++i ) {

			if ( ! predicates[i]( input ) ) {

				return false ;

			}

		}

		return true ;

	} ;

} ;

exports.conjunction = conjunction ;
