# Usage

```js
const {
	lt , le , gt ,
	truth , untruth ,
	negation ,
	conjunction , disjunction ,
	implication
} = predicate ;

let p = gt( 5 ) ;
p( 5 ) ; // false
p( 6 ) ; // true

let q = lt( 7 ) ;
q( 6 ) ; // true
q( 7 ) ; // false

let r = conjunction( p , q ) ;
r( 5 ) ; // false
r( 6 ) ; // true
r( 7 ) ; // false

let s = negation( r ) ;
s( 5 ) ; // true
s( 6 ) ; // false
s( 7 ) ; // true

let t = equivalence( p , negation( le( 5 ) ) ) ;
t( ... ) ; // true

let u = implication( negation( q ) , p ) ;
u( ... ) ; // true

let v = disjunction( truth , untruth ) ;
v( ... ) ; // true
```
