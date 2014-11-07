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

// v.timer(1000, function(n) {
// 	if (n < 10) {
// 		console.log('Callback is called:', n);
// 		return true;
// 	}
// 	return false;
// });

var oTree = new v.Btree();

oTree.insert(23, 'twenty three');
//oTree.insert(6, 'six');
//oTree.insert(2, 'two');
oTree.insert(8, 'eight');
oTree.insert(11, 'eleven');
//oTree.insert(30, 'thirty');

oTree.display();
// console.log(oTree.sort(true));
// console.log(oTree.sort());
// 
// console.log(oTree.search(23));