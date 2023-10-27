const palindromeChecker = (str) => {
  str = str.toLowerCase();
  const regex = /\W/g; //a regular expression to match non alphamumeric characters (whitespace, periods etc)

  const cleanedString = str.replace(regex, '');
  let reversed = '';

  for(let i = cleanedString.length - 1; i >= 0; i--){
    reversed += cleanedString[i];
  }
 return reversed === cleanedString ? "A palindrome" : "Not a palindrome";
}

//Test cases
//console.log(palindromeChecker('My age is 0, 0 si ega ym.'));
//console.log(palindromeChecker('101'));
//console.log(palindromeChecker('Civic'));
