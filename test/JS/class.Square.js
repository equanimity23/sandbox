var Square = function(nId) {
	var oDiv   = document.createElement('div');
	var sId    = 'square' + nId;
	var sColor = 'FFFFFF';
	
	oDiv.setAttribute('id', sId);
	oDiv.setAttribute('class', 'square');
	
	function getRandomInt(nMin, nMax) {
	  return Math.floor(Math.random() * (nMax - nMin)) + nMin;
	}

	function getRandomHex() {
		return getRandomInt(0, 256).toString(16);
	}

	function getRandomColor() {
		return getRandomHex() + getRandomHex() + getRandomHex();
	}

	this.setRandomColor = function() {
		sColor = getRandomColor();
		oDiv.setAttribute('style', 'background-color: #' + sColor);
	}
	
	this.render = function(oContainer) {
		oContainer.appendChild(oDiv);
	}
	
	this.getColor = function() {
		return sColor;
	}
	
	this.setColor = function(sNewColor) {
		sColor = sNewColor;
		oDiv.setAttribute('style', 'background-color: #' + sColor);
	}
}