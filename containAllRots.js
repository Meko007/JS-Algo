//Checks if an array contains all variations of a string
const containAllRots = (strng, arr) =>{
  let count = 0;
  let regex = /[strng]/gi;
  for(let i = 0; i < arr.length; i++){
    if(regex.test(arr[i])) count++;
  }
  return count === strng.length ? true : false;
};

//Test cases
//console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));
//console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]));
