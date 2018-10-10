
var array_1 = [2, 5, 10];
//  0

array_1 = array_1.sort(function(a, b) {
  return a - b;
});;

// console.log(array_1);

var enter_number = 50;
var index;

for(i = 0 ;i < array_1.length ; i++)
{

	if(array_1[i] < enter_number && array_1[i+1] > enter_number  )
	{
		console.log(i  + "if");
		index = array_1.indexOf(array_1[i+1])
		break;
	}
	else if(array_1[i] == enter_number && array_1[i+1] > enter_number  )
	{
		console.log(i + "else if_1");
		index = array_1.indexOf(array_1[i])
		break;
	}
	else 
	{
		index = array_1.length;
	}

}

console.log(index);