// Could use recursion
export const conjunctions = (predicates) => (input) => {
	for (const predicate of predicates) {
		if (!predicate(input)) return false;
	}

	return true;
};
