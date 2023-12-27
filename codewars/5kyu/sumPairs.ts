/*
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
*/
const sumPairs = (ints: number[], s: number) => {
    let set = new Set();

    for (let i = 0; i < ints.length; i++) {
        let diff = s - ints[i];

        if (set.has(diff)) {
            return [diff, ints[i]];
        }

        set.add(ints[i]);
    }

    return undefined;
};

//Test cases
// console.log(sumPairs([11, 3, 7, 5], 10));
// console.log(sumPairs([4, 3, 2, 3, 4], 6));
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
// console.log(sumPairs([0, 0, -2, 3], 2));
