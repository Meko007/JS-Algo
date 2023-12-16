/*
#Task

Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. 
The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. 
Handle invalid input and don't forget to return valid ones.

#Input

The input is any random string. 
You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. 
However you could also receive inputs that are not strings. 
If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. 
Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)

Example:
Input: getCount('test')
Output: {vowels:1,consonants:3}

Input: getCount('tEst')
Output: {vowels:1,consonants:3}

Input getCount('    ')
Output: {vowels:0,consonants:0}

Input getCount()
Output: {vowels:0,consonants:0}
*/
const getCount = words => {
    if(typeof words !== 'string') return { vowels: 0, consonants: 0 };
    return { 
        vowels: (words.match(/[aeiou]/gi) || []).length, 
        consonants: (words.match(/[b-df-hj-np-tv-z]/gi) || []).length 
    };
};

//Test cases
// console.log(getCount('Test'));
// console.log(getCount('Here is some text'));
// console.log(getCount(''));
// console.log(getCount('To be a Codewarrior or not to be'));
// console.log(getCount('To Kata or not to Kata'));
// console.log(getCount('aeiou'));
// console.log(getCount());
// console.log(getCount(['To Kata or not to Kata']));
// console.log(getCount(undefined));