Hint.Context = new function() {
	var _oSelected = null,
		_nGutter   = 30,
		_nTimer    = null,
		_nSlowBy   = 0;

	var _initialize = function() {
			Hint.$('*').mouseenter(function() {
				if (!Hint.$(this).hasClass('hint')) {
					// if (_nTimer) { clearTimeout(_nTimer); }
					// var oElement = this;
					// _nTimer = setTimeout(function() {
						_select(this);
					// }, _nSlowBy);
				}
			});
			
			// Hint.$('body').mousemove(function(oEvent) {
			// 	if (oEvent.pageX < _nGutter || oEvent.pageY < _nGutter || oEvent.pageX > $(document).width() - _nGutter) {
			// 		_select(document.body);
			// 	}
			// }); 
		},
		
		_select = function(oElement) {
			var oStyles = Hint.$(oElement).css(['display']);

			if (oStyles.display == 'block') {
				if (_oSelected) {
					Hint.$(_oSelected).removeClass('hint_context_selected');
				}
				_oSelected = oElement;
				Hint.$(oElement).addClass('hint_context_selected');
				// console.log('select', oElement);
				Hint.UI.Iris.focus(Hint.$(oElement));
			} else {
				_selectNextParent(oElement);
			}
		},
		
		_selectNextParent = function(oElement) {
			var oParent = oElement.parentNode;
			while (oParent && oParent.nodeType == 1) {
				if (Hint.$(oParent).css('display') == 'block') {
					_select(oParent);
					break;
				}
				oParent = oParent.parentNode;
			}
		};
		
	Hint.$(document).ready(function() {
		_initialize();
	});
}