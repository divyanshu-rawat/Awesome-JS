// Solution
function telephoneCheck(str) {
  return str.match(/^(1)?[ -]?(\([0-9]{3}\)|[0-9]{3})[ -]?[0-9]{3}[ -]?[0-9]{4}$/g) !== null;
}

// TEST CASES from Free Code Camp
// telephoneCheck("555-555-5555");
// telephoneCheck("1 555-555-5555");
// telephoneCheck("1 (555); 555-5555");
// telephoneCheck("5555555555");
// telephoneCheck("555-555-5555");
// telephoneCheck("(555);555-5555");
// telephoneCheck("1(555);555-5555");
// telephoneCheck("555-5555");
// telephoneCheck("5555555");
// telephoneCheck("1 555);555-5555");
// telephoneCheck("1 555 555 5555");
// telephoneCheck("1 456 789 4444");
// telephoneCheck("123**&!!asdf#");
// telephoneCheck("55555555");
// telephoneCheck("(6505552368);");
// telephoneCheck("2 (757); 622-7382");
// telephoneCheck("0 (757); 622-7382");
// telephoneCheck("-1 (757); 622-7382");
// telephoneCheck("2 757 622-7382");
// telephoneCheck("10 (757); 622-7382");
// telephoneCheck("27576227382");
// telephoneCheck("(275);76227382");
// telephoneCheck("2(757);6227382");
// telephoneCheck("2(757);622-7382");
// telephoneCheck("555);-555-5555");
// telephoneCheck("(555-555-5555");
// telephoneCheck("(555);5(55?);-5555");

// ----- BONUS using regex to strip the "test cases" down to actual usable test cases ---- //

/**
* Created by Vampiire on 5/3/17.
*
* produced usable test cases...
* BY THE POWER OF REGEX
*/


// var map = {

//     ')' : ');',
//     "should return true." : '\n',
//     "should return false." : '\n',
//     "should return a boolean." : '\n',
//     "should return false" : '\n',
//     "should return true" : '\n',
//     '.': ''

// };



// var str = 'telephoneCheck("555-555-5555") should return a boolean.\
// telephoneCheck("1 555-555-5555") should return true.\
// telephoneCheck("1 (555) 555-5555") should return true. \
// telephoneCheck("5555555555") should return true. \
// telephoneCheck("555-555-5555") should return true. \
// telephoneCheck("(555)555-5555") should return true. \
// telephoneCheck("1(555)555-5555") should return true.\
// telephoneCheck("555-5555") should return false.\
// telephoneCheck("5555555") should return false.\
// telephoneCheck("1 555)555-5555") should return false.\
// telephoneCheck("1 555 555 5555") should return true.\
// telephoneCheck("1 456 789 4444") should return true.\
// telephoneCheck("123**&!!asdf#") should return false.\
// telephoneCheck("55555555") should return false.\
// telephoneCheck("(6505552368)") should return false\
// telephoneCheck("2 (757) 622-7382") should return false.\
// telephoneCheck("0 (757) 622-7382") should return false.\
// telephoneCheck("-1 (757) 622-7382") should return false\
// telephoneCheck("2 757 622-7382") should return false.\
// telephoneCheck("10 (757) 622-7382") should return false.\
// telephoneCheck("27576227382") should return false.\
// telephoneCheck("(275)76227382") should return false.\
// telephoneCheck("2(757)6227382") should return false.\
// telephoneCheck("2(757)622-7382") should return false.\
// telephoneCheck("555)-555-5555") should return false.\
// telephoneCheck("(555-555-5555") should return false.\
// telephoneCheck("(555)5(55{0,1})-5555") should return false.';


// var replaced = str.replace(/(\))|(should return true)|(should return false)|(should return a boolean.)|(\.)/g, function(m){return map[m];});
// console.log(replaced);