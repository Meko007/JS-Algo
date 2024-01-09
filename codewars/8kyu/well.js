/*
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.
*/
const well = x => {
    let count = 0;

    for (let y of x) {
        if (y.toLowerCase() === 'good') count++;
    }

    if (count > 0 && count <= 2) return "Publish!";
    if (count > 2) return "I smell a series!";
  
    return "Fail!";
};

// Test cases
// console.log(well(['bad', 'bad', 'bad']));
// console.log(well(['bad', 'bad', 'bad', 'good']));
// console.log(well(['good', 'bad', 'bad', 'bad', 'good', 'good']));