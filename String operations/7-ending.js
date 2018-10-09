function confirmEnding(str, target) {
  return str.substr(-target.length) === target;  
}

confirmEnding("Bastian", "n");
