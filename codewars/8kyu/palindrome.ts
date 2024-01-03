const isPalindrome = (x: string) => {
    x = (x.toLowerCase()).replace(/\W/g, '');
    let rev = '';
  
    for(let i = x.length - 1; i >= 0; i--){
      rev += x[i];
    }
   return rev === x;
};