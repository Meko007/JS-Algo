const strStr = (haystack, needle) =>{
  for(let i = 0; i < haystack.length; i++){
    let match = true;
    for(let j = 0; j < needle.length; j++){
      if(haystack[i + j] !== needle[j]){
        match = false;
        break;
      }
    }
    if(match) return i;
  }
  return -1;
};

//Test cases
//console.log(strStr("sadbutsad", "sad"));
//console.log(strStr("leetcode", leeto));
