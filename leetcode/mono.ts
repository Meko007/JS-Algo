/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/
const isMonotonic = (nums: number[]) => {
    let inc = true;
    let dec = true;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[i + 1]) inc = false;
        else if(nums[i] < nums[i + 1]) dec = false;
    }
    return inc || dec;
};

//Test cases
// console.log(isMonotonic([1, 2, 2, 3]));
// console.log(isMonotonic([6, 5, 4, 4]));
// console.log(isMonotonic([1, 3, 2]));
