//Returns an array of strings with a strict length of 4
const friends = (names: string[]) => {
    let arr: string[] = [];
    for(let i = 0; i < names.length; i++){
        if(names[i].length === 4) arr.push(names[i]);
   }
   return arr; 
};

//Test cases
// console.log(friends(["Ryan", "Kieran", "Mark"]));
// console.log(friends(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
// console.log(friends(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));
// console.log(friends(["Love", "Your", "Face", "1"]));
// console.log(friends(["Okem", "Esom", "Amanda"]));
