String.protorype.getQueryParams = function() {
  var query = window.location.search;
  return query.replace(/^\?/, '').split('&').reduce((result, item) => {
    if (item) {
      item = item.split('=').map((value) => decodeURIComponent(value))
      result[item[0]] = item[1]
    }
    return result
  }, {})
}
