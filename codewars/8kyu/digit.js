/*
Implement String#digit?, which should return true if given object is a digit (0-9), false otherwise.
*/
String.prototype.digit = function() {
    return /^[0-9]$/.test(this);
};

//Test cases
// console.log('7'.digit());
// console.log(''.digit());
// console.log(' '.digit());
// console.log('14'.digit());
