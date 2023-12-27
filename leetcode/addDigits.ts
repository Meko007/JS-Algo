//Add the digits of a number until a single digit remains

const addDigits = (num: number) => 1 + (num - 1) % 9; // using a mathematical approach; every number that goes through modulo 9 will return a single digit between 0-9;
// why modulo 9?, well 9 is the last single digit number before 10
  
//Test cases
//console.log(addDigits(3899));
//console.log(addDigits(645));
