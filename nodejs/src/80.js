const findPair = (arr, number) => {
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = 1;
    const target = Math.abs(number);

    while (start < end && start < arr.length && end < arr.length) {
        const diff = Math.abs(arr[start] - arr[end]);
        if (diff === target) {
            console.log(true);
            return true;
        }

        if (diff < target) {
            end++;
        }

        if (diff > target) {
            start++;
        }
        console.log(start, end);
    }

    console.log(false)
    return false;
}

findPair([6, 1, 4, 10, 2, 4], 2);
findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1);
findPair([4, -2, 3, 10], -6);
findPair([6, 1, 4, 10, 2, 4], 22);
findPair([], 0);
findPair([5, 5], 0);
findPair([-4, 4], -8);
findPair([-4, 4], 8);
findPair([1, 3, 4, 6], -2);
findPair([0, 2, 4, 6, 8, 9], 1);