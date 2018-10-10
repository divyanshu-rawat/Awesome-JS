
// console.log("palindrome");


var string = "Cccccc2@";
var string_1 = string.toLowerCase();
var string_2 = string_1.replace(/[^a-z0-9+]+/gi,'');

console.log(string_2);

var array_1 = [];
var array_2 = [];
var length = string_2.length;
var index;

for(i=0 ; i < length  ; i++)
{
	array_1[i] = string_2[i];
	array_2[i] = string_2[length - i -1]; 

	if(array_1[i] == array_2[i])
	{
		continue;
	}

	else
	{
		index = i;
		break;
	}
}


if(array_1 [index] != array_2 [index])
{
	console.log('Not palindrome');
}
else
{
	console.log("palindrome");
}
