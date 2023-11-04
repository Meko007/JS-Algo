//Returning the sum of all integers in the range [1, n] that are divisible by 3, 5, or 7.
const sumOfMultiples = n =>{
  let sum = 0;
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 
      || i % 5 === 0 
      || i % 7 === 0) sum += i;
  }
  return sum;
};

//Test cases
// console.log(sumOfMultiples(9));
// console.log(sumOfMultiples(10));
// console.log(sumOfMultiples(23));
