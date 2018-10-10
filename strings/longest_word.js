

var sentence = "The quick brown fox jumped over the lazy dog";

var string = sentence.split(" ");

// console.log(string);

var longest_word_length = 0;

for(i=0 ; i < string.length ; i++)
{
	if(longest_word_length < string[i].length)
	{
		// console.log(string[i].length);
		longest_word_length = string[i].length;
	}
}



console.log(longest_word_length);


// c-111
// console.log(string[0].length);