var A = function() {
	this.f = function() {
		return 'class A';
	}
}

var B = function() {
	this.f = function() {
		return 'class B';
	}
}

var C = function() {
	
}

B.prototype = new A();

C.prototype = new B();

var o = new C();

if (confirm('use f1 - ok, f2 - cancel')) {
	B.prototype.f1 = function() {
		return 'if';
	}
} else {
	B.prototype.f1 = function() {
		return 'else';
	}
}

console.log(o.f1());