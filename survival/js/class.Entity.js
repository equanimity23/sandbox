var Entity = function(oWorld, nX, nY) {
	var _nId       = oWorld.getEntities().length + 1,
		_nCellSize = oWorld.getCellSize(),
		_nXCenter  = _nCellSize * (nX + 0.5),
		_nYCenter  = _nCellSize * (nY + 0.5),
		_nR        = 20,
		_sColor    = '#000000',
		_nEnergy   = 100,
		_aVision   = [],
		_oDna;
		
	var _construct = function() {
		};
		
	/**************** PUBLIC ****************/
	
	this.getId     = function() { return _nId; }
	this.getVision = function() { return _aVision; }
	this.getEnergy = function() { return _nEnergy; }
	this.getX      = function() { return nX; }
	this.getY      = function() { return nY; }
	
	this.draw = function() {
		var nFontSize = 12;
		oWorld.getCanvas().circle(_nXCenter, _nYCenter, _nR, _sColor);
		oWorld.getCanvas().text(_nId, _nXCenter, _nYCenter, true, '#CC0099', nFontSize);
		oWorld.getCanvas().text(_nEnergy, _nXCenter, _nYCenter + 10, true, '#006600', nFontSize - 4);
	}
	
	this.move = function() {
		
		var nXInc, nYInc, oOccupant;
		
		while (true) {
			nXInc = Math.rand(0, 3) - 1;
			nYInc = Math.rand(0, 3) - 1;
			if (oWorld.exists(nX + nXInc, nY + nYInc)) {
				break;
			}
		}
		
		if (!(nXInc == 0 && nYInc == 0)) {
			_nEnergy --;
		}
		
		if (oOccupant = oWorld.getOccupant(nX + nXInc, nY + nYInc)) {
			if (oOccupant.getEnergy() <= _nEnergy) {
				this.eat(oOccupant);
			} else {
				oOccupant.eat(this);
			}
		}
		
		nX += nXInc;
		nY += nYInc;
		_nXCenter  = _nCellSize * (nX + 0.5);
		_nYCenter  = _nCellSize * (nY + 0.5);
	}
	
	/*
	Vision should have:
	1. List of slopes to every entity in the world that is directly visible, sorted by distance ascending
	2. List of distances to obstacles in every direction, sorted by distance ascending
	
	DNA should have:
	1. Situation simplified + move that has been made + own energy
	
	Before each move entity should check for "similar" situation in DNA, 
	and if condition is found, move accordingly to DNA, otherwise – randomly.
	
	Entities will, then, fall into two categories: food or danger
	
	Situation  |  Reaction
	
	Energy     |  + or - (direction)
	Distance   |  vector length
	
	*/
	
	this.see = function() {
		var aOffsets = [
				[0,  -1],
				[1,  -1],
				[1,   0],
				[1,   1],
				[0,   1],
				[-1,  1],
				[-1,  0],
				[-1, -1]
			],
			oEntity;
		
		for (var n=0; n<8; n++) {
			oEntity = oWorld.getOccupant(nX + aOffsets[n][0], nY + aOffsets[n][1]);
			if (oEntity) {
				_aVision[n] = oEntity.getEnergy();
			} else {
				_aVision[n] = 0;
			}
		}
	}
	
	this.eat = function(oEntity) {
		if (oEntity != this) {
			console.log(_nId + ' just ate ' + oEntity.getId());
			_nEnergy += oEntity.getEnergy();
			oWorld.removeEntity(oEntity);
		}
	}
	
	_construct();
}