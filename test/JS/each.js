// function each(param1, param2)
// param1 - object
// param2 - callback
// 
// callback is called for each property of this object	
// 
// o {
// 	name1: 'value1',
// 	name2: 'value2'
// }

var o = {
	fname: 'John',
	lname: 'Doe',
	age  : 36,
	foo  : 'bar'
};

function isArray(m) { return Object.prototype.toString.call(m) === '[object Array]'; }

function each(o, f) {
	var n = 0;
	if (isArray(o)) {
		for (n=0; n<o.length; n++) {
			f(n, o[n]);
		}
	} else {	
		for (var s in o) {
			f(s, o[s], n);
			n ++;
		}
	}
}

function walk(o, f) {
	var n = 0;
	if (isArray(o)) {
		for (n=0; n<o.length; n++) {
			o[n] = f(n, o[n]);
		}
	} else {	
		for (var s in o) {
			o[s] = f(s, o[s], n);
			n ++;
		}
	}
}

function map(o, f) {
	var n = 0,
		m;
	if (isArray(o)) {
		m = [];
		for (n=0; n<o.length; n++) {
			m.push(f(n, o[n]));
		}
	} else {
		m = {};
		for (var s in o) {
			m[s] = f(s, o[s], n);
			n ++;
		}
	}
	return m;
}
[1,2,3]

function reduce(o, f) {
	var n = 0,
		m,
		mResult;
	if (isArray( o )) {
		if (mResult == null) {
			mResult = 0;
		}
		for (n=0; n<o.length; n++) {
			m = o[n];
			mResult = f(n, m, mResult);
	} else {	
		for (var s in o) {
			m = o[s];
			mResult = f(s, m, mResult, n);
			n ++;
	}
	return mResult;
}

function display(sKey, mValue, nIndex) {
	console.log('sKey:', sKey, ', mValue:', mValue, ', nIndex:', nIndex);
}

each(o, display);

walk(o, function(sKey, mValue, nIndex) {
	return 'haha';
});

each(o, display);