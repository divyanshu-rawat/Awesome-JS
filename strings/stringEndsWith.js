function solution(str, ending){
  return str.substring(str.length - ending.length) === ending;
}

