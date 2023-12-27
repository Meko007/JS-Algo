/*
Implement the function generateRange which takes three arguments (start, stop, step) 
and returns the range of integers from start to stop (inclusive) in increments of step.
*/
const generateRange = (min: number, max: number, step: number) => {
    let result: number[] = [];
    for(let i = min; i <= max; i += step) result.push(i);
    return result;
};

// Test cases
// console.log(generateRange(1, 10, 1));
// console.log(generateRange(-10, 1, 1));
// console.log(generateRange(1, 15, 20));