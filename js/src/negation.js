
var negation = function ( predicate ) {

	return function ( input ) {

		return ! predicate( input ) ;
		//     ^
		//     '- negation

	} ;

} ;

exports.negation = negation ;
