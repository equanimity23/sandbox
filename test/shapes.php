<?

	class Shape {
		
		public static function create($sSubClassName) {
			
			$aArgs = array_slice(func_get_args(), 1);          //array_slice return all elements of array except 1st (as we already have it, it's 'SubClassName'
			print "Creating $sSubClassName\n";
			print_r($aArgs);
			
			if (class_exists($sSubClassName)) {
				$oClass = new ReflectionClass($sSubClassName);
				return $oClass->newInstanceArgs($aArgs);
			}
			throw new Exception("Subclass $sSubClassName does not exist");
		
		}
		
		public function __construct() {
			print "Created new shape \n";
		}
		
		public function area() {
			
		}
	}
	
	class Rectangle extends Shape {
		
		public $w = 0;
		public $h = 0;
		
		public function __construct($w=0, $h=0) {
			print "Created new rectangle \n";
			print "$w, $h\n";
			$this->w = $w;
			$this->h = $h;
		}
		
		public function area() {
			print $this->w . ', ' . $this->h . "\n";
			return $this->w * $this->h;
		} 
	}

	class Circle extends Shape {
		
		public $r = 0;
		
		public function __construct($r=0) {
			print "Created new circle \n";
			print "$r\n";
			$this->r = $r;
		}
		
		public function area() {
			print $this->r . "\n";
			return pow($this->r, 2) * M_PI;	
		}
	}
	
	class Test {
		private $_aObjects = array();
		private $_aTypes   = array('Rectangle', 'Circle');
		
		public function __construct($nNumberOfObjects=10) {
			print "Creating $nNumberOfObjects objects:\n";
			
			for ($n=0; $n<$nNumberOfObjects; $n++) {
				$this->_aObjects[] = $this->createObject();
			}
			
			print 'Sum: ' . $this->sumAreas() . "\n";
		}
		
		public function createObject() {
			$sType   = $this->_aTypes[rand(0, count($this->_aTypes)-1)];
			$oObject = null;
				
			switch ($sType) {
				case 'Rectangle':
					// $oObject = new Rectangle(rand(10, 100), rand(10, 100));
					$oObject = Shape::create('Rectangle', rand(10, 100), rand(10, 100));
					break;
				case 'Circle':
					// $oObject = new Circle(rand(10, 100));
					$oObject = Shape::create('Circle', rand(10, 100));
					break;
				default:
					throw new Exception('Unknown type');
			}
			return $oObject;
		}
		
		public function sumAreas() {
			$nSum  = 0;
			$nArea = 0;
			
			for ($n=0; $n<count($this->_aObjects); $n++) {
				$nArea = $this->_aObjects[$n]->area();
				print 'Area: ' . $nArea . "\n";
				$nSum += $nArea;
			}
			return $nSum;
		}
		
	}
	
	new Test();
	
?>