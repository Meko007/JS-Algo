//Checks if an array contains all rotations of a string
const containAllRots = (strng: string, arr: string[]) => {
    if (strng === '') return true;

    for (let i = 0; i < strng.length; i++) {
        //checking if the index of a rotated string is === -1
        if(arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) return false;
    }

    return true;
};

//Test cases
// console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));
// console.log(containAllRots("", ["bsjq", "qbsj"]));
// console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]));
// console.log(containAllRots("Okemdinachi", ["kemdinachiO", "emdinachiOk", "mdinachiOke", "dinachiOkem", "inachiOkemd", "nachiOkemdi", "achiOkemdin", "chiOkemdina", "hiOkemdinac", "iOkemdinach", "Okemdinachi"]));

