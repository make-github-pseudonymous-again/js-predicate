
// could use recursion

export function disjunctions ( predicates ) {

	return function ( input ) {

		for ( let predicate of predicates ) {

			if ( predicate( input ) ) return true ;

		}

		return false ;

	} ;

}

