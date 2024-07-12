const fibonacci = function(num) {
    num = +num;
    let fib = [0, 1];
    if (num === 0) {
        return fib[num];
    } else if (num < 0) {
        return 'OOPS';
    } else {
        for (let i = 2; i <= num; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib.at(-1)
    }
};

// Do not edit below this line
module.exports = fibonacci;
