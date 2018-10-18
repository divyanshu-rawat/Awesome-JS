function findObjectKey(obj, predicate) {
    if (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && predicate(obj[key], key)) {
                return key;
            }
        }
    }
    return null;
}