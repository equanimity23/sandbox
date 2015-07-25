var Styles = new function() {
	this.style = function($Element, oStyles, nStyleMode) {
		if ($Element[0]._styleMode != nStyleMode) {
			this.unstyle($Element);
			var aStyles = [];
			for (var s in oStyles) {
				aStyles.push(s);
			}
			$Element[0]._styles    = $Element[0].getAttribute('style', '');
			$Element[0]._styleMode = nStyleMode;
		
			$Element.css(oStyles);
		}
	}
	
	this.unstyle = function($Element) {
		if ($Element[0]._styleMode != 0) {
			if ($Element[0]._styles) {
				$Element[0].setAttribute('style', $Element[0]._styles);
				$Element[0]._styles = '';
			}
			$Element[0]._styleMode = 0;
		}
	}
}