"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/boolean.js */

		var truth = function truth(x) {
			return true;
		};
		var untruth = function untruth(x) {
			return false;
		};

		exports.truth = truth;
		exports.untruth = untruth;

		/* js/src/conjunction.js */

		var conjunction = function conjunction(p, q) {
			return function (x) {
				return p(x) && q(x);
			};
		};

		exports.conjunction = conjunction;

		/* js/src/conjunctions.js */

		// could use recursion

		var conjunctions = function conjunctions(predicates) {

			return function (input) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {

					for (var _iterator = predicates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var predicate = _step.value;

						if (!predicate(input)) return false;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return true;
			};
		};

		exports.conjunctions = conjunctions;

		/* js/src/disjunction.js */

		var disjunction = function disjunction(p, q) {
			return function (x) {
				return p(x) || q(x);
			};
		};

		exports.disjunction = disjunction;

		/* js/src/disjunctions.js */

		// could use recursion

		var disjunctions = function disjunctions(predicates) {

			return function (input) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {

					for (var _iterator2 = predicates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var predicate = _step2.value;

						if (predicate(input)) return true;
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				return false;
			};
		};

		exports.disjunctions = disjunctions;

		/* js/src/equivalence.js */

		var equivalence = function equivalence(p, q) {
			return function (x) {
				return p(x) === q(x);
			};
		};

		exports.equivalence = equivalence;

		/* js/src/implication.js */

		var implication = function implication(p, q) {
			return function (x) {
				return !p(x) || q(x);
			};
		};

		exports.implication = implication;

		/* js/src/negation.js */

		var negation = function negation(p) {
			return function (x) {
				return !p(x);
			};
		};

		exports.negation = negation;

		/* js/src/numbers.js */

		var divides = function divides(y) {
			return function (x) {
				return y % x === 0;
			};
		};
		var divisible = function divisible(y) {
			return function (x) {
				return x % y === 0;
			};
		};

		exports.divides = divides;
		exports.divisible = divisible;

		/* js/src/operators.js */

		var lt = function lt(y) {
			return function (x) {
				return x < y;
			};
		};
		var le = function le(y) {
			return function (x) {
				return x <= y;
			};
		};

		var gt = function gt(y) {
			return function (x) {
				return x > y;
			};
		};
		var ge = function ge(y) {
			return function (x) {
				return x >= y;
			};
		};

		var eq = function eq(y) {
			return function (x) {
				return x === y;
			};
		};
		var ne = function ne(y) {
			return function (x) {
				return x !== y;
			};
		};

		exports.gt = gt;
		exports.ge = ge;
		exports.lt = lt;
		exports.le = le;
		exports.eq = eq;
		exports.ne = ne;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("@aureooms/js-predicate", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["predicate"] = {});
	} else console.error("unable to detect type of module to define for @aureooms/js-predicate");
})();