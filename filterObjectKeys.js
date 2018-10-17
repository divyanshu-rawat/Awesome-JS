function filterObjectKeys(obj, predicate) {
    return obj ? Object.keys(obj).filter(function (key) {
        return predicate(obj[key], key);
    }) : null;
}