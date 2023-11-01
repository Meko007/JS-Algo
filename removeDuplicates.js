//Removing duplicates from a sorted array and returning the length after
const removeDuplicates = nums =>{
  if(nums.length === 0){
      return 0;
  }

  let j = 1; //Initializing the count of unique values
  for(let i = 0; i < nums.length; i++){
      if(nums[i] !== nums[j - 1]){
          nums[j] = nums[i];
          j++;
      }
  }
  return j;
}

//Test cases
//console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
//console.log(removeDuplicates([1,1,2]));
