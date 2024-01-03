/*
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/
const isPalindrome = x => {
    x = (x.toLowerCase()).replace(/\W/g, '');
    let rev = '';
  
    for(let i = x.length - 1; i >= 0; i--){
      rev += x[i];
    }
   return rev === x;
};

// Test cases
// console.log(isPalindrome('aba'));
// console.log(isPalindrome('AbBa'));
// console.log(isPalindrome('Bob'));
// console.log(isPalindrome('Madam'));
// console.log(isPalindrome(''));