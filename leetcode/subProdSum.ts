//Return the difference between the product and the sum of the individual digits of a number
const subtractProductAndSum = (n: number) => {
    let arr = String(n).split('').map(Number);
    let product = 1;
    let sum = 0;
  
    for(let i = 0; i < arr.length; i++){
      product *= arr[i];
      sum += arr[i];
    }
  
    return product - sum;
};
  
//Test cases
//console.log(subtractProductAndSum(4421));
//console.log(subtractProductAndSum(234));
  