function createMyObject() {
	return {
		foo: 'bar',
		answerToUniverse: 42,
		'olly olly': 'oxen free',
		sayHello: function() {
			return 'hello';
		}
	};
}

function updateObject(obj) {
	obj.foo = 'foo';
	obj.bar = 'bar';
	obj.bizz = 'bizz';
	obj.bang = 'bang';
	return obj;
}

function personMaker() {
	var person = {
		firstname = 'Paul',
		lastname = 'Jones',
		fullname: function() {
			return this.firstName + '' + this.lastName
		}
	};
	return person;
}

var sampleObj = {
	foo: 'foo',
	bar: 'bar',
	brizz: 'brizz',
	bang: 'bang',
};

function keyDeleter(obj) {
	delete obj.foo;
	delete obj.bar;
	return obj;
}

