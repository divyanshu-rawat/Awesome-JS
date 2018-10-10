var sample_text = "Lorem Ipsum";

var count_chars = function(text) {
  var dict = {};
  for (var i = 0; i < text.length; i++) {
    if(dict[text[i]]) {
      dict[text[i]]++;
    } else {
      dict[text[i]] = 1;
    }
  }

  for(var char in dict) {
    console.log(char + " - " + dict[char]);
  }  
}

count_chars(sample_text);
