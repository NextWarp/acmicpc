function findAllDuplicates(arr) {
    const box = {};

    arr.forEach(n => {
        box[n] ? box[n]++ : box[n] = 1
    })

    const result = Object.keys(box).filter((value, index) => {
        if (box[value] === 2) return true;
    }).map(n => Number(n));

    console.log(result);
    return result;
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
findAllDuplicates([4, 3, 2, 1, 0]);
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]);