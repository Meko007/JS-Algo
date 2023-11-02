//Creating an array method that returns the last value in an array
Array.prototype.last = function() {
  if(this.length === 0) return 0;
  return this[this.length - 1];
};

//Test cases
/*
let arr = [5,6,7,8,9];
console.log(arr.last());
*/
/*
let arr = [null, "Ikeja", 9, 2.22];
console.log(arr.last());
*/
/*
let arr = [];
console.log(arr.last());
*/
