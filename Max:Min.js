function max(numbers) {
	var currentMax = numbers[0];
	for (var i=0; i<=numbers.length; i++) {
		if (numbers[i]>currentMax) {
			currentMax = numbers[i];
		}
	}
	return currentMax
}

function min(numbers) {
  var currentMin = numbers[0];
  for (var i=0; i<=numbers.length; i++) {
    if (numbers[i]<currentMin) {
       currentMin = numbers[i];
    }
  }
  return currentMin;
}
