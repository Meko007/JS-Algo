const well = (x: string[]): string => {
    let count = 0;

    for (let y of x) {
        if (y.toLowerCase() === 'good') count++;
    }

    if (count > 0 && count <= 2) return "Publish!";
    if (count > 2) return "I smell a series!";
  
    return "Fail!";
};