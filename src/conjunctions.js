// Could use recursion

export function conjunctions(predicates) {
	return function (input) {
		for (const predicate of predicates) {
			if (!predicate(input)) return false;
		}

		return true;
	};
}
