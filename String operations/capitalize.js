

var string = "sHoRt AnD sToUt";
string = string.split(" ");

// var array = [];

var counter = 0;
// console.log(string);

var length = string.length;

var new_array = [];
// console.log(length);

// console.log(string);

for(i=0 ; i < length ; i++)
{
	console.log(string[i]);

	var string_to_upper = string[i];
	// console.log(string_to_upper)
	string_to_upper = string_to_upper.split("");

	var length_1  = string_to_upper.length;

	console.log(length_1);

	// return_upper_case(string_to_upper);

	var array = [];

	for(var j = 0;j < length_1; j++)
	{

		if(j == 0)
		{
			// console.log(string_to_upper[j]);
			array[j] = string_to_upper[j].toUpperCase();
		}
		else
		{
			// console.log(string_to_upper[j]);
			array[j] = string_to_upper[j].toLowerCase(); 
		}


		// console.log(array);
	}


	// console.log(array);
	string_2 = array.join("");

	new_array[i] = string_2;


	// console.log(length);
}


// function return_upper_case (string_to_upper) {
	 
 
// }



string = new_array.join(" ");
console.log(string);