/*
In number theory, an abundant number or an excessive number is one for which the sum of it's proper divisors is greater than the number itself.
The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16. 
The amount by which the sum exceeds the number is the abundance. 
The number 12 has an abundance of 4, for example. 
Other initial abundant numbers are : 12, 18, 20, 24, 30, 36, 40, 42, 48, 54 etc . 
Infinitely many odd and even abundant numbers exist.
As you should have guessed by now, in this kata your function will take a positive integer h as range input and return a nested array/list that will contain the following informations-

- Highest available odd or even abundant number in that range
- It's abundance
*/
const abundant = (h: number) => {
    let nums: number[] = []; 
    for(let i = 1; i <= h; i++){
        let sum = 0;
        for(let j = 1; j < i; j++){
            if(i % j === 0){
                sum += j;
            }
        }
        if(sum > i) nums.push(i);
    }
    let sum = 0;
    for(let k = 1; k < nums[nums.length - 1]; k++){
        if(nums[nums.length - 1] % k === 0) sum += k;
    }
    return [[nums[nums.length - 1]], [sum - nums[nums.length - 1]]];
};

//Test cases
// console.log(abundant(15));
// console.log(abundant(19));
// console.log(abundant(100));
// console.log(abundant(999));

