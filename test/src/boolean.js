import test from 'ava';
import * as predicate from "../../src/index.js";

test( "boolean" , t => {

	t.true( predicate.truth( ) , "truth" ) ;
	t.true( !predicate.untruth( ) , "untruth" ) ;

} ) ;
