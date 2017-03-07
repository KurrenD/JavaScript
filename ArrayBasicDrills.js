function makeList(item1, item2, item3) {
	return [item1, item2, item3];
}

function addToDOList(list, item) {
	list.push(item)
	return list
}

function accessFirstItem(array) {
	return array[0];
}

function access ThirdItem(array) {
	return array[2];
}

function findLength(array) {
	return array.length;
}

function accessLastItem(array) {
	return array[array.length-1];
}

function minusLastItem(array) {
	return array.slice(0, 4);
}

function copyFirstHalf(array) {
	return array.slice(-3);
}

function squaresWithMap(array) {
	var result = array.map(function(num) {
		return num**2;
	});
	return result;
}

function greatestToLeast(array) {
	return array.sort(function(a,b) {
		return b-a;
	});
}

function shortWords(array) {
	return array.filter(function(word) {
		return word.length < 5;
	});
}

function divisibleBy5(array) {
	return array.find(function(num) {
		return num % 5 === 0;
	});
}