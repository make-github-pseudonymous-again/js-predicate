[js-predicate](http://aureooms.github.io/js-predicate)
==

Predicate code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-predicate.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-predicate/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-predicate.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-predicate)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-predicate.svg?style=flat)](http://bower.io/search/?q=aureooms-js-predicate)
[![Build Status](http://img.shields.io/travis/aureooms/js-predicate.svg?style=flat)](https://travis-ci.org/aureooms/js-predicate)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-predicate.svg?style=flat)](https://coveralls.io/r/aureooms/js-predicate)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-predicate.svg?style=flat)](https://david-dm.org/aureooms/js-predicate#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-predicate.svg?style=flat)](https://david-dm.org/aureooms/js-predicate#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-predicate.svg?style=flat)](https://codeclimate.com/github/aureooms/js-predicate)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-predicate.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-predicate)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-predicate.svg?style=flat)](https://github.com/aureooms/js-predicate/issues)

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let predicate = require( "aureooms-js-predicate" ) ;
```

Example usage:

```js
let p = predicate.gt( 5 ) ;
p( 5 ) ; // false
p( 6 ) ; // true

let q = predicate.lt( 7 ) ;
q( 6 ) ; // true
q( 7 ) ; // false

let r = predicate.conjunction( p , q ) ;
r( 5 ) ; // false
r( 6 ) ; // true
r( 7 ) ; // false

let s = predicate.negation( r ) ;
s( 5 ) ; // true
s( 6 ) ; // false
s( 7 ) ; // true

let t = predicate.equivalence( p , predicate.negation( predicate.le( 5 ) ) ) ;
t( ... ) ; // true

let u = predicate.implication( predicate.negation( q ) , p ) ;
u( ... ) ; // true

let v = predicate.disjunction( predicate.truth , predicate.untruth ) ;
v( ... ) ; // true
```
