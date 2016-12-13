function fizzBuzz(countTo) {
	var result = [];
	for (var i=1; i<=countTo; i++) {
		if (i%15===0) {
			result.push("fizzbuzz");
		}
		else if (i%5===0) {
			result.push("buzz");
		}
		else if (i%3===0) {
			result.push("fizz");
		}
		else {
			result.push(i);
		}
	}
	return result;
}