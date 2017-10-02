/** Factorial implementation in JS (using recursion) */

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// console.log(factorial(5));