/* You are given a string of words and numbers. Extract the expression including:
1. the operator: either addition ("gains") or subtraction ("loses")
2. the two numbers that we are operating on
Return the result of the calculation.
*/
const calculate = str =>{
    let nums = str.match(/\b\d+\b/gi).map(Number);
    let gains = (/gains/gi).test(str);

    return gains ? nums[0] + nums[1] : nums[0] - nums[1];
};

//Test cases
//console.log(calculate("Panda has 48 apples and loses 4"));
//console.log(calculate("Jerry has 34 apples and gains 6"));
