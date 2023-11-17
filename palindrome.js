const palindromeChecker = (str) => {
  str = str.toLowerCase();
  const regex = /\W/g; //a regular expression to match non alphamumeric characters (whitespace, periods etc)

  const cleanedStr = str.replace(regex, '');
  let rev = '';

  for(let i = cleanedStr.length - 1; i >= 0; i--){
    rev += cleanedStr[i];
  }
 return rev === cleanedStr ? "A palindrome" : "Not a palindrome";
}

//Test cases
//console.log(palindromeChecker('My age is 0, 0 si ega ym.'));
//console.log(palindromeChecker('101'));
//console.log(palindromeChecker('Civic'));
