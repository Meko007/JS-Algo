const numberJoy = (n: number): boolean => {
    let sum = Array.from(String(n)).map(Number).reduce((x, y) => x + y);
    let sumRev = parseInt(Array.from(String(sum)).reverse().join(''));
    return sum * sumRev === n;
};