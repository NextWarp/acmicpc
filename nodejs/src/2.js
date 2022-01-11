function countUniqueValues(values){
    if (values.length <= 0) return 0;

    let i = 0;
    for (var j = 1; j < values.length; j++) {
        if (values[i] !== values[j]) {
            i++;
            values[i] = values[j]
        }
    }

    console.log(i + 1);
}

countUniqueValues([1,1,1,1,1,1,2]);
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
countUniqueValues([]);
countUniqueValues([-2,-1,-1,0,1]);
countUniqueValues([-2]);
