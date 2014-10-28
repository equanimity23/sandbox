// console.log('Global this:', this);
// 
// function f() {
// 	console.log('This in f:', this);
// 	debugger;
// 	
// 	this.bla = 'bla1';
// }
// 
// f();
// 
// var o = new f();

function f1() {
	this.name = 'f1';
}

function f2() {
	this.name = 'f2';
}

function showName() {
	console.log('this.name: ', this.name);
}

var o1 = new f1();

var o2 = new f2();

showName();

showName.call(o1);

//call(o1, param1, param2, ..., paramN) - all these parameters are sent to function that has been called (callee);
//apply(o1, [param1, param2, ..., paramN]) - all these parameters are sent to callee as an array;
//bind(o1) - defines and returns a function where 'this' points to o1;

showName.call(o2);

var showName1 = showName.bind(o1);

showName1();