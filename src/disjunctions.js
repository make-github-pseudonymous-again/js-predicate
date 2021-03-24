
// could use recursion

let disjunctions = function ( predicates ) {

	return function ( input ) {

		for ( let predicate of predicates ) {

			if ( predicate( input ) ) return true ;

		}

		return false ;

	} ;

} ;

exports.disjunctions = disjunctions ;
