<?

	// $sMyString = 'I want you';
	
	// print "$sMyString, Vlada";
	
	//create Class which has No in constructor -> into private var, has 2 public functions set and get
	
	function nl() {
		print "\n";
	}
	
	class MyClass {

		private $_n = 0;
		
		public function __construct($n) {
			$this->_n = $n;
		}
		
		public function set($n) {
			$this->_n = $n;
		}
		
		public function get() {
			return $this->_n;
		}
		
		public function display() {
			print 'MyClass ' . $this->_n . "\n";
		}
	}
	
	class MySubClass extends MyClass {
		
		public function display() {
			print 'MySubClass ' . $this->get() . "\n";
		} 
		
	}
	
	$o1 = new MySubClass(5);
	$o1->display();
	
	$o2 = new MyClass(10);
	$o2->display();

?>