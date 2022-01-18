function power(number, multipleNumber){
    if (multipleNumber === 0) return 1;
    return number * power(number, --multipleNumber);
}

console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16
