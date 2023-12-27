const chunkArrayInGroups = (arr: any[], size: number) => {
    let temp: any[] = [];
    const result: any[] = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
};

//Test cases
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups(["a", "b", "c", "d", 1, 2, 3, 4], 3));
