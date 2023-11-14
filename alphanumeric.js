/*
The string has the following conditions to be alphanumeric:

1. At least one character ("" is not valid)
2. Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
3. No whitespaces / underscore
*/
const alphanumeric = str => { return (/^[a-zA-Z0-9]+$/gi).test(str); }

//Test cases
// console.log(alphanumeric("Mazinkaiser"));
// console.log(alphanumeric("hello world_"));
// console.log(alphanumeric("PassW0rd"));
// console.log(alphanumeric("  "));
// console.log(alphanumeric(""));
