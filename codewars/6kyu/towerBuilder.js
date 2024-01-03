/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)
*/
const towerBuilder = nFloors => {
    return Array.from({ length: nFloors }, (_, i) => {
        let space = ' '.repeat((nFloors - i) - 1);
        let stars = '*'.repeat((2 * i) + 1);
        return space + stars + space;
    });
};

// Test cases
// console.log(towerBuilder(6));
// console.log(towerBuilder(3));
// console.log(towerBuilder(2));
// console.log(towerBuilder(10));
