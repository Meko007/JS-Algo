const likes = (names: string[]) => {
    if (names.length === 0) return 'no one likes this';
    else if (names.length === 1) return `${names[0]} likes this`;
    else if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
    else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else {
        let others = names.length - 2;
        let andOthers = others > 0 ? `and ${others} others` : '';
        return `${names.slice(0, 2).join(', ')} ${andOthers} like this`;
    }
};