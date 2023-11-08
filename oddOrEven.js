/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/
const oddOrEven = arr =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++) sum += arr[i];
    return sum % 2 === 0 || arr.length === 0 ? "even" : "odd";
};

//Test cases
// console.log(oddOrEven([0, 1, 4]));
// console.log(oddOrEven([0, -1, -5]));
// console.log(oddOrEven([]));
// console.log(oddOrEven([0]));
// console.log(oddOrEven([1]));
// console.log(oddOrEven([0, 1, 2, 4, 5, 7]));
