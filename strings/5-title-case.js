function titleCase(str) {
  var words = str.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  });  
  return words.join(' ');
}

titleCase("I'm a little tea pot");
