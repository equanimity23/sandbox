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
	
	this.search = function(mKey, bGetNode) {
		bGetNode = bGetNode || false;
		if (_oRoot == null) {
			return null;
		}
		return _oRoot.search(mKey, bGetNode);
	}
	
	this.sort = function(bAsc) {
		bAsc = bAsc || true;
		if (_oRoot != null) {
			return _oRoot.sort(bAsc);
		};
		return [];
	}
	
	this.display = function() {
		if (_oRoot == null) {
			console.log('Tree is empty :(');
		} else {
			console.log(_oRoot.toString());
		}
	}
	
	this.set = function(mKey, mNewData) {
		var oNode = this.search(mKey, true);
		if (oNode != null) {
			oNode.set(mNewData);
			return true;
		}
		return false;
	}
	
	this.unset = function(mKey) {
		var oNode = this.search(mKey, true);
		if (oNode != null) {
			
			return true;
		}
		return false;
	}
}

v.Btree.Node = function(mKey, mData) {
	
	var _oParent     = null,
		_oLeftChild  = null,
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
	
	this.setParent = function() {
		
	}
	
	this.getRightChild = function() { return _oRightChild; }
	this.getLeftChild  = function() { return _oLeftChild;  }
	this.getData       = function() { return mData;        }
	this.getKey        = function() { return mKey;         }
	
	//23[6[2[null,null],8[7,null] , [null, 56[null, 123[null, null]]]
	
	this.toString = function(nIndent) {
		nIndent        = nIndent || 0;
		var nOldIndent = nIndent;
		nIndent       += mKey.toString().length + 2;
		
		var sLeft      = '',
			sRight     = '',
			sIndent    = v.strSpan(' ', nIndent),
			sOldIndent = v.strSpan(' ', nOldIndent);
		
		if (_oLeftChild == null) {
			sLeft = 'null';
		} else {
			sLeft = _oLeftChild.toString(nIndent);
		}
		
		if (_oRightChild == null) {
			sRight = 'null';
		} else {
			sRight = _oRightChild.toString(nIndent);
		}
		
		return mKey + '[\n' + sIndent + sLeft + ',\n' + sIndent + sRight + '\n' + sOldIndent + ']';
	}
	
	this.sort = function(bAsc) {
		var a = [];
		if (bAsc) {
			if (_oLeftChild != null) {
				a = a.concat(_oLeftChild.sort(bAsc));
			}
			a.push(mData);
			if (_oRightChild != null) {
				a = a.concat(_oRightChild.sort(bAsc));
			}
		} else {
			if (_oRightChild != null) {
				a = a.concat(_oRightChild.sort(bAsc));
			}
			a.push(mData);
			if (_oLeftChild != null) {
				a = a.concat(_oLeftChild.sort(bAsc));
			}
		}
		return a;
	}
	
	this.search = function(mSearchKey, bGetNode) {
		var mSearchData = null;
		if (mSearchKey < mKey) {
			if (_oLeftChild != null) {
				mSearchData = _oLeftChild.search(mSearchKey);
			}
		} else if (mSearchKey > mKey) {
			if (_oRightChild != null) {
				mSearchData = _oRightChild.search(mSearchKey);
			}
		} else {
			if (bGetNode) {
				mSearchData = this;
			} else {
				mSearchData = mData;
			}
		}
		return mSearchData;
	}
	
	this.set = function(mNewData) {
		mData = mNewData;
	}
}
