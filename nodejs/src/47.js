function insertionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a > b;
    }

    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i];
        let j = i - 1;
        for (; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }

    console.log(arr)
    return arr;
}


insertionSort([4, 20, 12, 10, 7, 9]);
insertionSort([0, -10, 7, 4]);
insertionSort([1, 2, 3]);
insertionSort([]);

var nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
    32,
];
insertionSort(nums);
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}
insertionSort(kitties, strComp);
const moarKittyData = [{
    name: 'LilBub',
    age: 7
}, {
    name: 'Garfield',
    age: 40
}, {
    name: 'Heathcliff',
    age: 45
}, {
    name: "Blue",
    age: 1
}, {
    name: "Grumpy",
    age: 6
}];
function oldestToYoungest(a, b) {
    return b.age - a.age;
}
insertionSort(moarKittyData, oldestToYoungest)