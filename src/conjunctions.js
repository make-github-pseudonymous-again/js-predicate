
// could use recursion

let conjunctions = function ( predicates ) {

	return function ( input ) {

		for ( let predicate of predicates ) {

			if ( ! predicate( input ) ) return false ;

		}

		return true ;

	} ;

} ;

exports.conjunctions = conjunctions ;
