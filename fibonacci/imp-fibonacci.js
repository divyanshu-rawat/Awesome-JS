// Imperative Fibonacci
function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }

    a = 1;
    b = 1;
    rv = a+b;
    for (var i=3; i<n; ++i) {
        a = b;
        b = rv;
        rv = a+b;
    }
    
    return rv;
}