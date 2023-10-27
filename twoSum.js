const twoSum = (nums, target) =>{
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];

        if(map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return [];
}

//Test cases
//console.log(twoSum([1, 4, 5, 6, 11], 17));
//console.log(twoSum([3,3], 6));
