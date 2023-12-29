const highAndLow = (numbers: string) => {
    let numArr = numbers.split(" ").map(Number);
    
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
};