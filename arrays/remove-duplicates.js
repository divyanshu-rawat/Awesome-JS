/*
 * [Remove Duplicates from provided array of objects]
 * @param  {array}  __arr    [array of objects]
 * @param  {string} __param  [object key for uniqueness constraint]
 * @return {array}           [source array with duplicates removed by provided uniqueness constraint]
 *
 * if __param is provided then array is treated as array of objects
 * eg.
 *   let arr = [{id:1,name:'p'},{id:1,name:'p'},{id:2,name:'p'},{id:3,name:'p'}];
 *   arr = removeDuplicates(arr,'id');
 *
 * 
 * if __param is not provided then array is treated as of primitive types array
 * eg.
 *   let arr = [1,1,1,3,4,5,2,2,4];
 *   arr = removeDuplicates(arr);
 * 
 */
const removeDuplicates = (__arr,__param) => {
    if(__param){
        return __arr.filter((__iteratee, __iterator) => {
            let __index = __arr.findIndex(__o => __o[__param] === __iteratee[__param]);
            return __iterator === __index;
        });
    }else{
        return __arr.filter((__iteratee, __iterator) => __arr.indexOf(__iteratee) === __iterator);
    }
};