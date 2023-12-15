/*
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/
String.prototype.isLetter = function() {
    return (/^[a-z]$/i).test(this);
}

//Test cases
// console.log(''.isLetter());
// console.log('a'.isLetter());
// console.log('X'.isLetter());
// console.log('7'.isLetter());
// console.log('*'.isLetter());
// console.log('ab'.isLetter());
// console.log('a\n'.isLetter());