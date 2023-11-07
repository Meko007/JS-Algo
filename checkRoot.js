//Returns the product(+ 1) and square root of the product of a given string of 4 consecutive numbers
const checkRoot = str => {
    let arr = str.split(',').map(item => {
        return isNaN(item) ? item.trim() : Number(item.trim());
    });
    let product = 1;    
    
    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i]) || arr.length !== 4 || arr[i] < 1) return "incorrect input";
        if((!isNaN(arr[i])) && 
        (arr[i] + 1 < arr[i + 1] || arr[i] === arr[i + 1] || arr[i] > arr[i + 1] + 1 || arr[0] > arr[1])){
            return "not consecutive";
        } 

        product *= arr[i];
    }
    product += 1;

    return `${product}, ${Math.sqrt(product)}`;
};

//Test cases
// console.log(checkRoot('4,5,6,7'));
// console.log(checkRoot('3,s,5,6'));
// console.log(checkRoot('11,13,14,15'));
// console.log(checkRoot('92,89,90,91'));
// console.log(checkRoot('92,90,91'));
