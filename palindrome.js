const palindromeChecker = (str) => {
  str = str.toLowerCase();
  const regex = /\W/g;

  const cleanedString = str.replace(regex, '');
  let reversed = '';

  for(let i = cleanedString.length - 1; i >= 0; i--){
    reversed += cleanedString[i];
  }

  if(reversed === cleanedString){
    console.log('A palindrome');
  }else{
    console.log('Not a palindrome');
  }
}