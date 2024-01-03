const invert = (arr: number[]): number[] => {
    let newArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(-(arr[i]));
    }

    return newArr;
};