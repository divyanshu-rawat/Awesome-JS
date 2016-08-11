

var string = "Greetings from Earth";

var rev_array = [];
// console.log(string.split());

var len = string.length;

for(i = 0 ;i < len ; i++)
{
	rev_array[i] = string[len - i - 1]; 
}

console.log(rev_array);

new_array = rev_array.join("");

console.log(new_array);
