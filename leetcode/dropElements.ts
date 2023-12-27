/*
Given the array arr, this function iterates through and removes each element starting from the first element (the 0 index) 
until the function "func" returns true when the iterated element is passed through it.
*/
const dropElements = (arr: any[], func: any) => {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
};
  
//Test cases
//console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3;}));
//console.log(dropElements([0, 1, 0, 1], function(n) { return n === 1;}));
//console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
