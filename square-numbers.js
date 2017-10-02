var squareDance = function(inputArray) {
    var squaredArray = []                                   
    for (var i = 0; i < inputArray.length; i++) {           
        squaredArray.push(inputArray[i] * inputArray[i])    
    }
    return squaredArray
}