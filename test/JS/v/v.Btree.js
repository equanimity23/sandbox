v.Btree = function() {
	
	var _oRoot = null;
	
	this.insert = function(mKey, mData) {
		if (_oRoot == null) {
			_oRoot = new v.Btree.Node(mKey, mData);
		} else {
			var oChild = new v.Btree.Node(mKey, mData);
			_oRoot.insert(oChild);
		}
	}
	
	this.search = function(mKey) {
		
	}
	
	this.display = function() {
		if (_oRoot == null) {
			console.log('Tree is empty :(');
		} else {
			console.log(_oRoot.display());
		}
	}
}

v.Btree.Node = function(mKey, mData) {
	
	var _oLeftChild  = null,
		_oRightChild = null;
	
	this.insert = function(oChild) {
		if (mKey > oChild.getKey()) {
			if (_oLeftChild == null) {
				_oLeftChild = oChild;
			} else {
				_oLeftChild.insert(oChild);
			}
		} else {
			if (_oRightChild == null) {
				_oRightChild = oChild;
			} else {
				_oRightChild.insert(oChild);
			}
		}
	}
	
	this.getRightChild = function() { return _oRightChild; }
	this.getLeftChild  = function() { return _oLeftChild;  }
	this.getData       = function() { return mData;        }
	this.getKey        = function() { return mKey;         }
	
	//23[6[2[null,null],8[7,null] , [null, 56[null, 123[null, null]]]
	
	this.display = function() {
		var s = oRoot + '[' + _oLeftChild , _oRightChild + ']';
		if (_oLeftChild == null) {
			
		}
		return ;
	}
}
