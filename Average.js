function average(kurren) {
	var total = kurren[0];
	for (var i=1; i<kurren.length; i++) {
		total+= kurren[i];
	}
	return total/kurren.length
}