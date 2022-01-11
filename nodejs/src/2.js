function countUniqueValues(values){
    let i = 0;
    let j = 1;

    while (j <= values.length) {
        if (values[i] === values[j]) {
            j++
        } else {
            i++
            values[i] = values[j]
        }
    }

    console.log(i)
}

countUniqueValues([1,1,1,1,1,1,2]);
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
countUniqueValues([]);
countUniqueValues([-2,-1,-1,0,1]);
countUniqueValues([-2]);
