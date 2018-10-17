function filterObject(obj, predicate) {
    return obj ? filterObjectKeys(obj, predicate).reduce(function (res, key) {
        return res[key] = obj[key], res;
    }, {}) : null;
}