const searchArray = (arrayToSearch: object[] | any[], query: any) => {
    if (typeof query !== 'object' || query.length > 2) throw Error;

    for (let arr of arrayToSearch) {
        if (arr.length > 2 || !Array.isArray(arr)) throw Error;
    }

    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
            return i;
        }
    }
    
    return -1;
};