const towerBuilder = (nFloors: number) => {
    return Array.from({ length: nFloors }, (_, i) => {
        let space = ' '.repeat((nFloors - i) - 1);
        let stars = '*'.repeat((2 * i) + 1);
        return space + stars + space;
    });
};
