
let implication = ( p , q ) => x => ! p( x ) || q( x ) ;

exports.implication = implication ;
