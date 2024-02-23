const reduce = arr => {
    let num = 0;
    for (let i = arr[0]; i >= 1; i--) {
        if (arr[0] % i === 0 && arr[1] % i === 0) {
            num = i;
        } 
    }
    return [(arr[0] / num), (arr[1] / num)];
};

console.log(reduce([45, 120]));