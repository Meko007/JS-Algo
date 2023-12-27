/*
You need to write regex that will validate a password to make sure it meets the following criteria:

1. At least six characters long
2. contains a lowercase letter
3. contains an uppercase letter
4. contains a digit
5. only contains alphanumeric characters (note that '_' is not alphanumeric)
*/
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;

//Test cases
// console.log(REGEXP.test('fjd3IR9'));
// console.log(REGEXP.test('ghdfj32'));
// console.log(REGEXP.test('DSJKHD23'));
// console.log(REGEXP.test('dsF43'));
// console.log(REGEXP.test('4fdg5Fj3'));
// console.log(REGEXP.test('fjd3 IR9'));
// console.log(REGEXP.test('djI38D55@@'));
// console.log(REGEXP.test('hC91wlgg'));
// console.log(REGEXP.test('ABCabc123'));