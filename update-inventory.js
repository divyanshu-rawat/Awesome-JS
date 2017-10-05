function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    arr2.forEach(function(newItem) {
        var qty = newItem[0];
        var name = newItem[1];
        var currentItem = arr1.find(function(item) {
          return item[1] === name;
        })
        if (currentItem) {
          currentItem[0] += qty;
        } else {
          arr1.push(newItem);
        }
    });

    // sort item by name
    var sortedArray = arr1.sort(function(a,b) {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    });
    return sortedArray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
