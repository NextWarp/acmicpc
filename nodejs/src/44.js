function bubbleSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a > b
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log(arr);
    return arr;
}

bubbleSort([4, 20, 12, 10, 7, 9]);
bubbleSort([0, -10, 7, 4]);
bubbleSort([1, 2, 3]);
bubbleSort([]);

var nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
    32,
];
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}
bubbleSort(kitties, strComp);
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
bubbleSort(moarKittyData, oldestToYoungest)