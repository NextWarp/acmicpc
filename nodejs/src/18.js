function flatten(arr){
    if (arr.length <= 0) return [];
    const target = arr.shift();

    if (target instanceof Array) {
        return [...flatten(target), ...flatten(arr)];
    } else {
        return [target, ...flatten(arr)]
    }
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]