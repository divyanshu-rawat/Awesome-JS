// Tail recursive Fibonacci
function fibonacci(n) {
    return fibonacciRecursion(n, [1,1]);
}

function fibonacciRecursion (n, acc) {
    var last = acc.length-1;

    if (n <= 2) {
        return acc[last];
    }

    acc.push( acc[last] + acc[last-1] );
    return fibonacciRecursion(n-1, acc);
}

// function main () {
//     var val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( function (num) {
//         return fibonacci(num);
//     });
//     console.log(val);
//     return val;
// }