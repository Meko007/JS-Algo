const powersOfTwo = (n: number): number[] => {
    const arr: number[] = [];
    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i);
    }

    return arr;
}