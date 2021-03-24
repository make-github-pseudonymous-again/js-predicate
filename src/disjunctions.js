// Could use recursion
export const disjunctions = (predicates) => (input) => {
	for (const predicate of predicates) {
		if (predicate(input)) return true;
	}

	return false;
};
