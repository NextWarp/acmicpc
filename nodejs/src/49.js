const merge = (arr1, arr2, comparator) => {
    if (typeof comparator !== 'function') {
        comparator = (num1, num2) => num1 - num2;
    }
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        const compareResult = comparator(arr1[i], arr2[j]);
        const isLargeI = compareResult > 0;
        if (isLargeI) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }

    console.log(result);
    return result;
}

function mergeSort(arr, comparator) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid), comparator);
    let right = mergeSort(arr.slice(mid), comparator);

    return merge(left, right, comparator);
}

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