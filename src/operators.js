
let lt = y => x => x < y ;
let le = y => x => x <= y ;

let gt = y => x => x > y ;
let ge = y => x => x >= y ;

let eq = y => x => x === y ;
let ne = y => x => x !== y ;

exports.gt = gt ;
exports.ge = ge ;
exports.lt = lt ;
exports.le = le ;
exports.eq = eq ;
exports.ne = ne ;
