/*
Given an array arr, swap its first and last elements and return the resulting array.
Example
For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]
*/

const firstReverseTry = (arr: any[]) => {
    if(arr.length === 0) return [];
    if(arr.length === 1) return arr;
    let newArr = arr.slice(1, arr.length - 1);
    newArr.push(arr[0]);
    newArr.unshift(arr[arr.length - 1]);
  
    return newArr;
};

// Test cases
// console.log(firstReverseTry([1, 2, 3, 4, 5]));
// console.log(firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]));
// console.log(firstReverseTry([111]));
// console.log(firstReverseTry([]));