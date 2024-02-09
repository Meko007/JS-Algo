const howMuchILoveYou = (nbPetals: number): string => {
    const arr = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all'
    ];
    if (nbPetals % 6 === 0) return arr[5];
    return arr[(nbPetals % 6) - 1];
};