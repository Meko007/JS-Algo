/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/
const createCounter = init => {
    let count = init;
    return {
        increment : () => ++count,
        reset : () => count = init,
        decrement : () => --count,
    }
};

//Test cases

/*
const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement()); 
*/

/*
const counter = createCounter(20)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement()); 
*/