function shuffle(array) {
	let arr_size = array.length - 1;
	let rand, temp = null;

	for(let i = arr_size; i => 0; i -= 1) {
		rand = Math.round(Math.random() * arr_size);
		temp = array[i];
		array[i] = array[rand];
		array[rand] = temp;
	}
	return array;
}
