/*
You have to write a function pattern which returns the following Pattern ((n)(n-1)(n-2)...) upto n number of rows.

Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
*/
const pattern = (n: number) => {
    if(n < 1) return "";
    let output = "";
    for(let i = n; i >= 1; i--){
        output += Array.from({ length: i }, (_, index) => n - index).join('') + (i > 1 ? '\n' : '');
    }
    return output;
};

//Test cases
// console.log(pattern(5));
// console.log(pattern(6));
// console.log(pattern(11));


