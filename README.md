[@aureooms/js-predicate](https://aureooms.github.io/js-predicate)
==

Predicate code bricks for JavaScript.

[![License](https://img.shields.io/github/license/aureooms/js-predicate.svg)](https://raw.githubusercontent.com/aureooms/js-predicate/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-predicate.svg)](https://www.npmjs.org/package/@aureooms/js-predicate)
[![Build](https://img.shields.io/travis/aureooms/js-predicate/main.svg)](https://travis-ci.com/aureooms/js-predicate/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-predicate.svg)](https://david-dm.org/aureooms/js-predicate)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-predicate.svg)](https://david-dm.org/aureooms/js-predicate?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-predicate.svg)](https://github.com/aureooms/js-predicate/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-predicate.svg)](https://www.npmjs.org/package/@aureooms/js-predicate)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-predicate.svg)](https://codeclimate.com/github/aureooms/js-predicate/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-predicate.svg)](https://codeclimate.com/github/aureooms/js-predicate/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-predicate/main.svg)](https://codecov.io/gh/aureooms/js-predicate)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-predicate.svg)](https://codeclimate.com/github/aureooms/js-predicate/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-predicate//badge.svg)](https://aureooms.github.io/js-predicate//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-predicate)](https://bundlephobia.com/result?p=@aureooms/js-predicate)

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
