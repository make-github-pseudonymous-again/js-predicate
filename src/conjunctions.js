
// could use recursion

export function conjunctions ( predicates ) {

	return function ( input ) {

		for ( let predicate of predicates ) {

			if ( ! predicate( input ) ) return false ;

		}

		return true ;

	} ;

}

