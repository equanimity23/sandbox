v.Canvas = function(oContainer, nW, nH) {
	var _oCanvas,
		_oContext;
		
	var _construct = function() {
			console.log('construct');
			_oCanvas = document.createElement('canvas');
			_oCanvas.setAttribute('width', nW + 'px');
			_oCanvas.setAttribute('height', nH + 'px');
			oContainer.appendChild(_oCanvas);
			_oContext = _oCanvas.getContext('2d');
		};
		
	/**************** PUBLIC ****************/
	
	this.getPixel = function(nX, nY) {
		return _oContext.getImageData(nX, nY, 1, 1).data;
	}
	
	this.setPixel = function(nX, nY, aColor) {
		var oPixel = _oContext.createImageData(1, 1);
		for (var n=0; n<aColor.length; n++) {
			oPixel.data[n] = aColor[n];
		}
		_oContext.putImageData(oPixel, nX, nY);
	}
	
	this.moveTo = function(nX, nY) {
		_oContext.beginPath();
		_oContext.moveTo(nY, nY);
	}

	this.lineTo = function(nX, nY) {
		_oContext.strokeStyle = '#000000';
		_oContext.lineTo(nX, nY);
		_oContext.stroke();
	}
	
	this.fill = function(nX, nY, aColor) {
		this.setPixel(nX, nY, aColor);
	}
	
	this.hasColor = function(nX, nY, aColor) {
		for (var n=0; n<aColor.length; n++) {
			oPixel.data[n] = aColor[n];
		}
	}

	_construct();
}