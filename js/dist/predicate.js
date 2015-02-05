(function(exports, undefined){

	'use strict';


/* js/src/conjunction.js */

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

/* js/src/disjunction.js */

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


/* js/src/equivalence.js */

var equivalence = function ( p , q ) {

	return function ( input ) {

		return p( input ) === q( input ) ;

	} ;

} ;

exports.equivalence = equivalence ;

/* js/src/implication.js */

var implication = function ( p , q ) {

	return function ( input ) {

		return ! p( input ) || q( input ) ;

	} ;

} ;

exports.implication = implication ;

/* js/src/negation.js */

var negation = function ( predicate ) {

	return function ( input ) {

		return ! predicate( input ) ;
		//     ^
		//     '- negation

	} ;

} ;

exports.negation = negation ;

})(typeof exports === 'undefined' ? this['predicate'] = {} : exports);
