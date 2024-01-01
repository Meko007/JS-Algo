/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]]
*/
const explode = x => {
    let sum = 0, arr = [];

    if (isNaN(x[0]) && isNaN(x[1])) {
        return 'Void!';
    }

    for (let elem of x) {
        if (!isNaN(elem)) sum += elem;
    }


    for (let i = 1; i <= sum; i++) {
        arr.push(x);
    }

    return arr;
};

// Test cases
// console.log(explode([9, 3]));
// console.log(explode(['a', 3]));
// console.log(explode([6, 'c']));
// console.log(explode(['a', 'b']));
// console.log(explode(['a', 0]));
