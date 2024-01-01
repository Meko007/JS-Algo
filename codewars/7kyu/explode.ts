const explode = (x: any[]) => {
    let sum = 0, arr: object[] = [];

    if (isNaN(x[0]) && isNaN(x[1])) {
        return 'Void!';
    }

    for (let elem of x) {
        if (!isNaN(elem)) sum += elem;
    }


    for (let i = 1; i <= sum; i++) {
        arr.push(x);
    }

    return arr;
};