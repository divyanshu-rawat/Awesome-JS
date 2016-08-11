// function isBigEnough(value) {
  
//   return value >= 10;

// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]

// console.log(filtered);


var array_1  = ([7, "ate", "", false, 9]);

var array_2 = array_1.filter(call_back);


function call_back(element)
{
	if((typeof(element) == 'number' && !isNaN(element) && element !== 0)  || ((typeof(element) == 'string')  && element !=="" && element !== 0 ))
	{
		return true;
	}
	else
	{
		return false;
	}
}

// console.log(typeof(NaN));

// if(!isNaN(1))
// {
// 	console.log("enter");
// }

// console.log(isNaN(NaN));

console.log(array_2);