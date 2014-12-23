//var oTree = new v.Vtree();

// oTree.insert(23, 'twenty three');
// oTree.insert(6, 'six');
// oTree.insert(2, 'two');
// oTree.insert(8, 'eight');
// oTree.insert(11, 'eleven');
// oTree.insert(30, 'thirty');
// 
//oTree.display();
// console.log(oTree.sort(true));
// console.log(oTree.sort());
// 
// console.log(oTree.search(23));

var a = [1,2,3];

var nSum = v.reduce(a, function(n, m, mResult, n) {
	mResult = mResult || 0;
	return mResult + m;
});

console.log(nSum);
