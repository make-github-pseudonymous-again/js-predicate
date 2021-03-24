export const implication = (p, q) => (x) => !p(x) || q(x);
