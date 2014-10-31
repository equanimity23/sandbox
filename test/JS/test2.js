var o = [1,2,3,4];

function isArray(m) { return Object.prototype.toString.call(m) === '[object Array]'; }

function reduce(o, f) {
	var n = 0,
		m,
		mResult;
	if (isArray(o)) {		
		for (n=0; n<o.length; n++) {
			m = o[n];
			mResult = f(n, m, mResult);
			console.log(mResult);
		}
	} else {	
		for (var s in o) {
			m = o[s];
			mResult = f(s, m, mResult, n);
			n ++;
		}
	}
	return mResult;
}
function sum(n, m, mResult) {
	var nSum;
	if (typeof(m) == 'number') {
		if (mResult == null) {
			mResult = 0;
		}
		nSum = m + mResult;
	}
	else if (typeof(m) == 'string') {
		if (mResult == null) {
			mResult = '';
			nSum = m;
		} else {
		nSum = mResult + '-' + m;
		}
	}
	return nSum;
}

function avg(n, m, mResult) {
	var nAvg;
	if (typeof(m) == 'number') {
		if (mResult == null) {
			mResult = 0;
			nAvg = m;
		}
		nAvg = (m + mResult) / (n + 1);
	return nAvg;
	}
	else {
		return null;
	}
}
reduce(o, avg);