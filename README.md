[js-predicate](http://aureooms.github.io/js-predicate)
==

Predicate code bricks for JavaScript.

[![NPM license](https://img.shields.io/npm/l/@aureooms/js-predicate.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-predicate/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-predicate.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-predicate)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-predicate.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-predicate)
[![Build Status](https://img.shields.io/travis/aureooms/js-predicate.svg?style=flat)](https://travis-ci.org/aureooms/js-predicate)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-predicate.svg?style=flat)](https://coveralls.io/r/aureooms/js-predicate)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-predicate.svg?style=flat)](https://david-dm.org/aureooms/js-predicate#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-predicate.svg?style=flat)](https://david-dm.org/aureooms/js-predicate#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-predicate.svg?style=flat)](https://codeclimate.com/github/aureooms/js-predicate)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-predicate.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-predicate)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-predicate.svg?style=flat)](https://github.com/aureooms/js-predicate/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-predicate.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-predicate)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-predicate
# or
jspm install npm:@aureooms/js-predicate
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-predicate
```

### bower
```terminal
bower install @aureooms/js-predicate
```

### ender
```terminal
ender add @aureooms/js-predicate
```

### jam
```terminal
jam install @aureooms/js-predicate
```

### spm
```terminal
spm install @aureooms/js-predicate --save
```

### npm
```terminal
npm install @aureooms/js-predicate --save
```

## Require
### jspm
```js
let predicate = require( "github:aureooms/js-predicate" ) ;
// or
import predicate from '@aureooms/js-predicate' ;
```
### duo
```js
let predicate = require( "aureooms/js-predicate" ) ;
```

### component, ender, spm, npm
```js
let predicate = require( "@aureooms/js-predicate" ) ;
```

### bower
The script tag exposes the global variable `predicate`.
```html
<script src="bower_components/@aureooms/js-predicate/js/dist/predicate.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-predicate" ] , function ( predicate ) { ... } ) ;
```

## Use

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

## References

  - https://github.com/jamestalmage/predicate-js
