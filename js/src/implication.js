
var implication = function ( p , q ) {

	return function ( input ) {

		return ! p( input ) || q( input ) ;

	} ;

} ;

exports.implication = implication ;
