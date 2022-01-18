function productOfArray(products) {
    if (!products.length) return 1;
    return products.shift() * productOfArray(products);
}


console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60