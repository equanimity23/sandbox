// function display(sKey, mValue, nIndex) {
// 	console.log('sKey:', sKey, ', mValue:', mValue, ', nIndex:', nIndex);
// }
// 
// function sum(n, m, mResult) {
// 	var nSum;
// 	if (typeof(m) == 'number') {
// 		if (mResult == null) {
// 			mResult = 0;
// 		}
// 		nSum = m + mResult;
// 	}
// 	else if (typeof(m) == 'string') {
// 		if (mResult == null) {
// 			mResult = '';
// 			nSum = m;
// 		} else {
// 		nSum = mResult + '-' + m;
// 		}
// 	}
// 	return nSum;
// }

// v.reduce(o, sum);
// 
// v.each(o, display);
// 
// v.walk(o, function(sKey, mValue, nIndex) {
// 	return 'haha';
// });

v.timer(1000, function(n) {
	if (n < 10) {
		console.log('Callback is called:', n);
		return true;
	}
	return false;
});