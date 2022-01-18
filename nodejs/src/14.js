function fib(count){
    if (count === 1) return 1;
    if (count === 2) return 1;

    return fib(count - 1) + fib(count - 2);
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
