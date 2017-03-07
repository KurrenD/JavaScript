function makeStudentsReport(data) {
	var results = [];
	for (var i=0; =<data.length; i++) {
		var item = data[i];
		results.push(item.name + ':' + item.grade);
	}
	return results;
}

function enrollInSummerSchool(students) {
	return students.map(function(student) {
		return {
			name: student.name,
			status: 'In Summer School',
			course: student.course
		}
	});
}

function findByItems(items, idNum) {
	return items.find(function(item) {
		return item.id === idNum;
	});
}

function validateKeys(object, expectedKeys) {
	if (Object.keys(object).length !== expectedKeys.length) {
		return false;
	}
	for (var i; i<expectedKeys.length; i++) {
		if (!Object.keys(object).find(function(key) {
			return key === expectedKeys[i];
		})) {
			return false;
		}
	}
	return true;
}

function makeToDos(owner, toDos) {
	return {
		owner: owner,
		toDos, toDos,
		generateHtml: function() {
			var html = '<ul>';
			this.toDos.forEach(function(todo) {
				html+= '<li>' + todo + '</li>';
			});
			return html + '</ul>';
		}
	}
}