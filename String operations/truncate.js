

// var str1 = 'The morning is upon us.';
// var str2 = str1.slice(4, -2);
// OUTPUT: morning is upon u
// console.log(str2);


var string_1 = "A-";

var num_ber = 1;

var string_dot = "...";

	if(string_1.length > num_ber && num_ber > 3)
	{
		string_1 = string_1.slice(0,num_ber-3);
		string_1 = string_1 + string_dot;
		// console.log(string_1);
		return string_1;
	}

	else if(string_1.length < num_ber)
	{
		// console.log(string_1);
		return string_1;
	}
	else if(string_1.length == num_ber)
	{
		// console.log(string_1);
		return string_1;
	}

	else
	{
		string_1 = string_1.slice(0,num_ber);
		string_1 = string_1 + string_dot;
		// console.log(string_1);
		return string_1;
	}
