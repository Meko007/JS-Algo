/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/
const take = (arr: any[], n: number) => arr.slice(0, n);

//Test cases
// console.log(take([0, 1, 2, 3, 5, 8, 13], 3));
// console.log(take(['a', 'b', 'c', 'd', 'z', 'q'], 2));
// console.log(take([10, 9, 8, 7, 6, 5, 4], 1));
// console.log(take([10, 9, 8, 7, 6, 5, 4], 0));