function toSingleSpace(str)
{
    if(!str || typeof str != 'string') return str
    str = str.trim()
    return str.replace(/\s\s+/g, ' ')
}

// result must be : "Hi, guys. welcome to our channel and let's dance together"
console.log(toSingleSpace('   Hi, guys.   welcome to our channel and let\'s dance  together '))