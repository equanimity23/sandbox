// function f1(f) {
// 	var s = 'string';
// 	f(s);
// }
// 
// f1(function(s) {
// 	console.log('callback, ' + s);
// });

// 
// // -if no params will be passed to f();
// // function f() {
// // 	setTimeout(f, 1000);
// // }
// 
// 
// // -if any params are passed to f():

function f(n) {
	if (typeof n == 'undefined') {
		n = 0;
	}
	console.log(n);
	setTimeout(function() {
		n ++;
		f(n);
	}, 1000);
};

f();
