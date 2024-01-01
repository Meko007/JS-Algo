const arrayPlusArray = (arr1: number[], arr2: number[]): number => 
    [...arr1, ...arr2].reduce((a, b) => a + b);
