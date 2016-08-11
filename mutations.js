
var array = ["hello", "Hello"];

// var check_1 = array.slice(0,1);
// var check_2 = array.slice(1,2);

var check_1 = array[0].toLowerCase();
var check_2 = array[1].toLowerCase();



// console.log(typeof(check_1));
// console.log(check_2);

var count = 0;
// check_1 = check_1.split("");
check_2 = check_2.split("");

// console.log(check_1.indexOf('h'));
console.log(check_2);
console.log(check_1);

for(i=0;i<check_2.length;i++)
{
	if( check_1.indexOf(check_2[i]) >= 0 )
	{
		count++;
	}
}

console.log(count);

if(count == check_2.length)
{
	console.log("checked");
}

// for(c=0; c<check_2.length;c++)
// {
// 	if(check_2)
// }

// for(i=0;i < check_1.length; i++)
// {
// 	for(j=0;j < check_2.length;j++)
// 	{
// 		if(check_2[j] == check_1[i])
// 		{
// 			count++;
// 		}
// 	}

// }

// console.log(count);
// if(count == check_2.length)
// {
// 	// return true;
// 	console.log("true")
// }
// else
// {
// 	// return false;
// 	console.log("false")
// }

