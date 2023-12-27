/*
Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), 
String::whitespace(str) (CoffeeScript), or whitespace(str) (Python), 
which should return true/True if given object consists exclusively of zero or more whitespace characters, false/False otherwise.
*/
String.prototype.whitespace = function () {
    return /^\s*$/.test(this);
};

//Test cases
// console.log(''.whitespace());
// console.log(' '.whitespace());
// console.log('\n\r\n\r'.whitespace());
// console.log('a'.whitespace());
// console.log('w\n'.whitespace());
// console.log('\t'.whitespace());
// console.log(' a\n'.whitespace());
// console.log('\t \n\r\n'.whitespace());
// console.log('\n\r\n\r'.whitespace());
// console.log('\n\r\n\r 3'.whitespace());