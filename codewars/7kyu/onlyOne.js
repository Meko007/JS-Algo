/*
Given any number of boolean flags function should return true if and only if one of them is true while others are false. 
If function is called without arguments it should return false.
*/
const onlyOne = (...args) => {
    let count = args.filter(arg => arg).length;
    return count === 1 && args.length > 0;
};

//Test cases
//console.log(onlyOne(false, false, true, true));
//console.log(onlyOne(false, false, false, true));
//console.log(onlyOne(false, false, false, false));
