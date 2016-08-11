


var array = ["a", "b", "c", "d","e","f"];
var slice_integer = 3;

var combo_array = [];
var current = 0;
var next = slice_integer;

var array_split_actual_length = (array.length/slice_integer);


for(i=0; i < array_split_actual_length ; i++)
{

	var array_1 = array.slice(current,next);
	combo_array.push(array_1);

	current = current + slice_integer;
	next = next + slice_integer;

}

console.log(combo_array);