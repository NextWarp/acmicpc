const pivot = (arr = [], comparator, start = 0, end = arr.length - 1) => {
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

    console.log(swapIdx);
    return swapIdx;
}

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
    return a.length - b.length;
}

pivot(arr1)
pivot(arr2)
pivot(arr3, strLength)