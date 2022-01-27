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
        const isLargeJ = compareResult < 0;
        if (isLargeI) {
            result.push(arr2[j]);
            j++;
        } else if (isLargeJ) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr1[i]);
            result.push(arr2[j]);
            i++;
            j++;
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

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];

merge(arr1, arr2)

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

merge(arr3, arr4);

var arr5 = [3, 4, 5];
var arr6 = [1, 2];

merge(arr5, arr6);

var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
    return str1.length - str2.length;
}

merge(names, otherNames, stringLengthComparator)