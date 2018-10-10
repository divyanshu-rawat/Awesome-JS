

var string_class = function (str) {
	 
	 this.string  = str;
};


var array = [];

// solved testing bug !!!



function repeatStringNumTimes(str, num) {
   

for(i=0;i<num;i++)
{

	var string_instance = new string_class(str);

	// console.log(string_instance.string);
	array[i] = string_instance.string;

	console.log(array);
}

string = array.join("");
  return string;


}

var repeated_string = repeatStringNumTimes("abc", 3);

console.log(repeated_string);
