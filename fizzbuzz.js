var fizzbuzz = function(num) {
    var fizzbuzzStr = ""
    for (var i = 1; i <= num; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            fizzbuzzStr += "."
        }
        if (i % 3 === 0 && i % 5 !== 0) {
            fizzbuzzStr += "fizz"
        }
        if (i % 3 !== 0 && i % 5 === 0) {
            fizzbuzzStr += "buzz"
        }
        if (i % 3 === 0 && i % 5 === 0) {
            fizzbuzzStr += "fizzbuzz"
        }
    }
    return fizzbuzzStr
}