
var equivalence = function ( p , q ) {

	return function ( input ) {

		return p( input ) === q( input ) ;

	} ;

} ;

exports.equivalence = equivalence ;
