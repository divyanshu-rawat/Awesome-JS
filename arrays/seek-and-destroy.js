

var array_1 = [1, 2, 3, 1, 2, 3];

var value_1 = 2;
var value_2 = 3;


function call_back(element) {

	if(element == value_1 || element == value_2)
	{
		return false;
	}	 
	else
	{
		return true;
	}

}

var new_array= array_1.filter(call_back);

// array.splice(index,howmany,item1,.....,itemX)

console.log(new_array);