
var Styles = new function() {
	var _oDefaultStyles = null;

	var _getDefaultStyles = function() {
			if (!_oDefaultStyles) {
				// Create dummy element
				var oDummy = document.createElement('element-' + (new Date().getTime()));
				document.body.appendChild(oDummy);
				_oDefaultStyles = getComputedStyle(oDummy);
			}
			document.body.removeChild(oDummy);
			return _oDefaultStyles;
		};
		
	/*********************************************************************/
	
	this.getComputedStyle = function(oElement) {
		if (window.getComputedStyle) {
			return window.getComputedStyle(oElement);
		}
		return oElement.currentStyle;
	}

	this.getAppliedStyles = function(oElement) {
		var oElementStyles = this.getComputedStyle(oElement),
			oDefaultStyles = _getDefaultStyles(),
			oStyles = {};
			
		for (var sKey in oElementStyles) {
			if ('0123456789'.indexOf(sKey[0]) == -1) {
				if (oDefaultStyles[sKey] !== oElementStyles[sKey]) {
					oStyles[sKey] = oElementStyles[sKey];
				} else {
					console.log('skipping', sKey, oElementStyles[sKey]);
				}
			}
		}
		return oStyles;
	}
}