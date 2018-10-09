
 
function randomStringGenerator(list,how_long) {
    var tmp = '', i = 0;
    var list_len = list.length;
     
    for (i = 0; i < how_long; i++) {
        tmp += list.charAt(Math.floor(Math.random() * list_len));
    }
   
    return tmp;
}