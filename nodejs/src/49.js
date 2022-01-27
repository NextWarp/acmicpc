function merge() { }

function mergeSort() { }

mergeSort([4, 20, 12, 10, 7, 9]);
mergeSort([0, -10, 7, 4]);
mergeSort([1, 2, 3]);
mergeSort([]);

var nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
    32,
];
mergeSort(nums);

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}
mergeSort(kitties, strComp);

const moarKittyData = [
    {
        name: "LilBub",
        age: 7,
    },
    {
        name: "Garfield",
        age: 40,
    },
    {
        name: "Heathcliff",
        age: 45,
    },
    {
        name: "Blue",
        age: 1,
    },
    {
        name: "Grumpy",
        age: 6,
    },
];
function oldestToYoungest(a, b) {
    return b.age - a.age;
}
mergeSort(moarKittyData, oldestToYoungest);