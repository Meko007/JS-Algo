/*
Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.
*/
const findScreenHeight = (width, ratio) => {
    let ratioArr = ratio.match(/\b\d+\b/gi);
    return `${width}x${Math.round((width * parseInt(ratioArr[1])) / parseInt(ratioArr[0]))}`;
};

//Test cases
// console.log(findScreenHeight(1024,"4:3"));
// console.log(findScreenHeight(1280,"16:9"));
// console.log(findScreenHeight(3840,"32:9"));