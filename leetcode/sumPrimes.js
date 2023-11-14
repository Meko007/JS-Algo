const sumPrimes = range =>{
  let number = 2;
  let sum = 0;
  do{
      let isPrime = true;

      for(let i = 2; i < number; i++){ 
          if(number % i === 0){
              isPrime = false;
              break;
          }
      }
   //the for loop starts dividing from 2 and stops just before the number that's being checked
      if(isPrime) sum += number;

      number++;
  }while(number <= range){
    return sum;
  }
};

//Test cases
//console.log(sumPrimes(100000));
//console.log(sumPrimes(199));
//console.log(sumPrimes(10));
