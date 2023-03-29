const tupleExample: [number, string] = [13, 'Karl'];
const immutableExample: readonly [number, string] = [5, 'Julia'];

tupleExample[1] = 'Marx';

console.log(tupleExample);
