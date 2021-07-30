//total combination can be 2^n
const combinations = (elements, count) => {
    if (typeof elements == 'string') elements = elements.split('');
    if (elements.length == 0) return [[]];

    const firstElement = elements[0];
    const restElement = elements.splice(1);

    //recursive call
    const combinationWithoutFirst = combinations(restElement);
    const combinationWithFirst = [];

    combinationWithoutFirst.forEach(elements => {
        const combWithFirst = [...elements, firstElement];
        combinationWithFirst.push(combWithFirst);
    })

     const a = [...combinationWithoutFirst, ...combinationWithFirst].forEach(el => {
        if (el.length == count) console.log( el.join(''));
    })
    return [...combinationWithoutFirst, ...combinationWithFirst];
}
combinations('abcd', 2);

