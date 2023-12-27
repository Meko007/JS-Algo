/*
Create a function that returns the total of a meal including tip and tax. 
You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. 
Please round your result to two decimal places.
*/
const calculate_total = (subtotal: number, tax: number, tip: number) => 
    parseFloat(((subtotal * (tax / 100)) + (subtotal * (tip / 100)) + subtotal).toFixed(2));


//Test cases
// console.log(calculate_total(5, 5, 10));
// console.log(calculate_total(36.97, 7, 15));
// console.log(calculate_total(0.00, 6, 18));
// console.log(calculate_total(80.94, 0, 20));
// console.log(calculate_total(54.96, 8, 0));