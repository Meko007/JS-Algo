/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

1. arr[i] - number from the arr
2. i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/
const filter = (arr, fn) => {
    let filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)) filteredArr.push(arr[i]);
    }
    return filteredArr;
};

//Test cases
// console.log(filter([0, 10, 20, 30], function greaterThan10(n){return n > 10}));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], function odd(n){return n % 2 !== 0}));