const palindromeChecker = (str: string) => {
    str = (str.toLowerCase()).replace(/\W/g, '');
    let rev = '';
  
    for(let i = str.length - 1; i >= 0; i--){
      rev += str[i];
    }
   return rev === str ? "A palindrome" : "Not a palindrome";
};
  
//Test cases
// console.log(palindromeChecker('My age is 0, 0 si ega ym.'));
// console.log(palindromeChecker('101'));
// console.log(palindromeChecker('Civic'));
