/* Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). 
The original array will be not empty and will contain at least "number" even numbers.*/
const evenNumbers = (arr: number[], num: number) => {
    let evenArr: number[] = [];
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] % 2 === 0) evenArr.unshift(arr[i]);
        if(evenArr.length === num) break;
    }
    
    return evenArr;
};

//Test cases
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));
