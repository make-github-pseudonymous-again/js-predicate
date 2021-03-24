// Could use recursion

export function disjunctions(predicates) {
	return function (input) {
		for (const predicate of predicates) {
			if (predicate(input)) return true;
		}

		return false;
	};
}
