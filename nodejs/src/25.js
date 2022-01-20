function binarySearch(arr, number) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let pointer = Math.floor((start + end) / 2);
        if (arr[pointer] === number) return pointer;
        if (arr[pointer] < number) start = pointer + 1;
        else end = pointer - 1;
    }

    return -1;
}

const result = binarySearch([1,2,3,4,5], 2);