const openOrSenior = (data: any[]) => {
    let arr: string[] = [];
    for (let i = 0; i < data.length; i++) {
        (data[i][0] >= 55 && data[i][1] > 7) ? arr.push('Senior') : arr.push('Open');  
    }
    return arr;
};
