function sleepSort(items) {
  var result = [];

  items.forEach(function(i) {
    setTimeout(function() {
      result.push(i);

      if (result.length == items.length) {
        return result;
      }
    }, i);
  });
}
