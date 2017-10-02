var maxOfArray = function(numArray) {
    var max = 0                                     
    if (numArray.length === 0) {                    
        return null                                 
    }
    for (var i = 0; i < numArray.length; i++) {    
        if (max < numArray[i]) {                    
            max = numArray[i]                      
    }
    return max
}