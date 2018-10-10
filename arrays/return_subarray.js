

var array = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]
var largest = 0;

var list = [];

for(i=0 ; i < array.length ; i++)
{
	largest = 0;
	for(j=0 ; j < array[i].length ; j++)
	{
		if(largest < array[i][j])
		{
			largest = array[i][j];
		}
	}

	list[i] = largest;
}

console.log(list);