//Get the average value of numbers that are even and multiples of 3
const averageValue = (nums: number[]) => {
    let count = 0, sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 6 === 0){ // a multiple of 2 and 3 is a multiple of 6
            sum += nums[i];
            count++;
        }
    }
    return sum === 0 ? sum : Math.floor(sum / count);
};

//Test cases
//console.log(averageValue([1, 2, 4, 7, 10]));
//console.log(averageValue([1, 3, 6, 10, 12, 15]));
