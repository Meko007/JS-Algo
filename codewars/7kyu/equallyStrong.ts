/*
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
*/
const areEquallyStrong = (yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number) => {
    if(yourLeft < 0 || yourRight < 0 || friendsLeft < 0 || friendsRight < 0) return false;
    return ((yourLeft === friendsLeft && yourRight === friendsRight) || 
    (yourRight === friendsLeft && yourLeft === friendsRight)) ? true : false;
};

//Test cases
// console.log(areEquallyStrong(10, 15, 15, 10));
// console.log(areEquallyStrong(15, 10, 15, 10));
// console.log(areEquallyStrong(10, 10, 10, 10));
// console.log(areEquallyStrong(15, 10, 15, 9));
// console.log(areEquallyStrong(10, 5, 5, 10 ));
// console.log(areEquallyStrong(1, 10, 10,0));
// console.log(areEquallyStrong(10, 5, 11, 4));
// console.log(areEquallyStrong(-1, 10, 4, 5));
