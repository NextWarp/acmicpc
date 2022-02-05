const pivot = (arr = [], comparator, start = 0) => {
    if (!comparator) {
        comparator = (a, b) => a > b;
    }

    const swap = (array, idx1, idx2) => [array[idx2], array[idx1]] = [array[idx1], array[idx2]]

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (comparator(pivot, arr[i]) > 0) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, start, swapIdx)
    return swapIdx;
}

const quickSort = (arr, comparator, left = 0, right = arr.length - 1) => {
    if (!comparator) {
        comparator = (a, b) => a > b;
    }

    if (left < right) {
        const pivotIndex = pivot(arr, comparator, left, right)
        quickSort(arr, comparator, left, pivotIndex - 1);
        quickSort(arr, comparator, pivotIndex + 1, right);
    }

    console.log(arr);
    return arr;
}


quickSort([4, 20, 12, 10, 7, 9])
quickSort([0, -10, 7, 4])
quickSort([1, 2, 3])
quickSort([])

