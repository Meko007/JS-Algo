/*
Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. 
If this one is an alligator (case-insensitive) return small otherwise return wide.
*/
const mouthSize = (animal) => { return (/alligator/gi).test(animal) ? 'small' : 'wide' };

//Test cases
// console.log(mouthSize('toucan'));
// console.log(mouthSize('ant bear'));
// console.log(mouthSize('alligator'));