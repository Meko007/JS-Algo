const printerError = (s: string): string => {
    let count = 0;
  
    for (let l of s) {
        if (!(/[a-m]/gi.test(l))) count++;
    }
  
    return `${count}/${s.length}`;
  };