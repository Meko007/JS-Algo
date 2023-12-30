/*
Add two logs with base X, with the value of A and B. 
Example log A + log B where the base is X.
*/
const logs = (x, a, b) => (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x));

// Test cases
// console.log(logs(10, 2, 3));
// console.log(logs(5, 2, 3));
// console.log(logs(1000, 2, 3));