//Remove the element is both arrays that are the same
const findDiff = (nums1, nums2) =>{
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);

  for(let item of nums1){
    if(nums2.has(item)) {
      nums1.delete(item);
      nums2.delete(item);
    }
  }
  return [[...nums1], [...nums2]];
};

//Test cases
//console.log(findDiff([1, 2, 3], [2, 4, 6]));
//console.log(findDiff([1, 2, 3, 3], [1, 1, 2, 2]));
