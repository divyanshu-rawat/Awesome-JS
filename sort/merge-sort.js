function mergeSort (a) {
    // Leaf case
    if ( !(a instanceof Array) || a.length == 1 ) {
        return a;
    }

    // Branch case
    var limit = Math.floor(a.length/2);
    var left = mergeSort( a.slice(0, limit) );
    var right = mergeSort( a.slice(limit, a.length) );
    
    return merge(left, right);
}

function merge (left, right) {
    // Merge
    merged = []
    l = 0;
    r = 0;

    // No one finished
    while (l < left.length && r < right.length)
    {
        if (left[l] <= right[r]) {
            merged.push(left[l++]);
        }
        else {
            merged.push(right[r++]);
        }
    }

    // Left finished
    while (r < right.length) {
        merged.push(right[r++]);
    }

    // Right finished
    while (l < left.length) {
        merged.push(left[l++]);
    }

    return merged;
}