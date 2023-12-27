/*
Your generator must take one parameter `a` then everytime the generator is called you must return a string in the format of: `'a x b = c'` where c is the answer. 
Also, the value of `b`, which starts at 1, must increment by 1 each time!
*/
const generator = function* (a: number) {
    let b = 1;
    while (true) {
      yield `${a} x ${b} = ${a * b}`;
      b++;
    }
};

//Test cases
/*
let gen = generator(5);

console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
*/

/*
let gen = generator(4);

console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
*/
