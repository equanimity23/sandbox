var World = function(oContainer, nXSize, nYSize, nEntities, oOutput) {
	var _oThis      = this,
		_oCanvas,
		_aEntities  = [],
		_nCellSize  = 50,
		_oInterval,
		_nInterval  = 1000,
		_nIteration = 0,
		_nCurrent   = 0,
		_nW         = nXSize * _nCellSize + 1,
		_nH         = nYSize * _nCellSize + 1;
	
	var _construct = function() {
			_oCanvas = new v.Canvas(oContainer, _nW, _nH);
			_redraw();
			_populate();
		},
		
		_populate = function() {
			for (var n=0; n<nEntities; n++) {
				_oThis.addEntity();
			}
		},
		
		_output = function() {
			var aLines = ['Iteration: ' + _nIteration];
			for (var n=0; n<_aEntities.length; n++) {
				aLines.push(_aEntities[n].getId() + ': ' + _aEntities[n].getVision().join('-'));
			}
			oOutput.innerHTML = aLines.join('\n');
		},
		
		_redraw = function() {
			var n;
			_oCanvas.clear();
			for (n=0; n<=nXSize; n++) {
				_oCanvas.moveTo(_nCellSize * n + 1, 0);
				_oCanvas.lineTo(_nCellSize * n + 1, _nH);
			}
			for (n=0; n<=nYSize; n++) {
				_oCanvas.moveTo(0,   _nCellSize * n + 1);
				_oCanvas.lineTo(_nW, _nCellSize * n + 1);
			}
			for (n=0; n<_aEntities.length; n++) {
				_aEntities[n].draw();
			}
			_output();
			_nIteration ++;
		},
		
		_updateVision = function() {
			for (var n=0; n<_aEntities.length; n++) {
				_aEntities[n].see();
			}
		};
		
	/**************** PUBLIC ****************/
	
	this.getCanvas   = function() { return _oCanvas; }
	this.getXSize    = function() { return nXSize; }
	this.getYSize    = function() { return nYSize; }
	this.getCellSize = function() { return _nCellSize; }
	this.getEntities = function() { return _aEntities; }
	
	this.getOccupant = function(nX, nY) {
		for (var n=0; n<_aEntities.length; n++) {
			if (_aEntities[n].getX() == nX && _aEntities[n].getY() == nY) {
				return _aEntities[n];
			}
		}
		return null;
	}
	
	this.addEntity = function() {
		var nX,
			nY,
			oEntity;

		while (true) {
			nX = Math.rand(0, nXSize);
			nY = Math.rand(0, nYSize);
			if (!this.isOccupied(nX, nY)) {
				break;
			}
		}
		
		oEntity = new Entity(this, nX, nY);
		_aEntities.push(oEntity);
		_updateVision();
		oEntity.draw();
	}
	
	this.removeEntity = function(oEntity) {
		var a = [];
		for (var n=0; n<_aEntities.length; n++) {
			if (_aEntities[n] != oEntity) {
				a.push(_aEntities[n]);
			}
		}
		_aEntities = a;
		_updateVision();
		_redraw();
	}
	
	this.isOccupied = function(nX, nY) {
		return this.getOccupant(nX, nY) !== null
	}
	
	this.exists = function(nX, nY) {
		return (
			nX >= 0 && nX < nXSize &&
			nY >= 0 && nY < nYSize
		);
	}
	
	this.start = function() {
		_oInterval = setInterval(function() { _oThis.nextIteration(); }, _nInterval);
	}
	
	this.stop = function() {
		clearInterval(_oInterval);
	}
	
	this.nextIteration = function() {
		if (_nCurrent == 0) {
			this.nextEntity();
		}
		while (_nCurrent != 0) {
			this.nextEntity();
		}
	}
	
	this.nextEntity = function() {
		_aEntities[_nCurrent].move();
		_nCurrent ++;
		if (_nCurrent >= _aEntities.length) {
			_nCurrent = 0;
		}
		_updateVision();
		_redraw();
	}
	
	_construct();
}