// x is the string, alpha is the character to be replaced, beta is the substring to be replaced with

function replaceAll(x, alpha, beta){
  while(x.indexOf(alpha)!= -1){
    x = x.replace(alpha, beta);
  }
  return x;
}
