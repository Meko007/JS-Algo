//Return an array that contains the intersection of both arrays
const intersection = (nums1, nums2) =>{
  let ansArray = [];
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);

  for(let item of nums1){
    if(nums2.has(item)) ansArray.push(item);
  }
  return ansArray;
};

//Test cases
//console.log(intersection([1, 2, 2, 1], [2, 2]));
//console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
