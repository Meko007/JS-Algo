const removeElement = (nums: number[], val: number) => {
    nums = nums.filter(item => item !== val);
    return nums;
};

//Test cases
//console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
//console.log(removeElement([3, 2, 2, 3], 3));


//The output of the code below is the length of the array after removing the element(s)
/*
const removeElement = function(nums: number[], val: number) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
        nums[i] = nums[j];
        i++;
        }
    }
    return i;
};
*/
