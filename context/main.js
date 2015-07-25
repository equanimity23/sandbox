Hint = {};
Hint.$ = hQuery;

Hint.Context = new function() {
	var _$Selected = null;
	
	var _initialize = function() {
			Hint.$('*').mouseenter(function() { _select(Hint.$(this)); });
			// Hint.$('*').mouseleave(function() { _deselect(Hint.$(this)); _selectNextParent(Hint.$(this)); });
			Hint.$('body').mousemove(function(oEvent) {
				var nMargin = 30;
				if (oEvent.pageX < nMargin || oEvent.pageY < nMargin || oEvent.pageX > $(document).width() - nMargin) {
					_select(Hint.$(document.body));
				}
			}); 
		},
		
		_select = function($Element) {
			var oStyles  = $Element.css(['display']);
			if (oStyles.display == 'block') {
				if (_$Selected) {
					_$Selected.removeClass('hint_context_selected');
				}
				_$Selected = $Element;
				_$Selected.addClass('hint_context_selected');
			} else {
				_selectNextParent($Element);
			}
		},
		
		_selectNextParent = function($Element) {
			var oParent = $Element[0].parentNode;
			while (oParent && oParent.nodeType == 1) {
				if (Hint.$(oParent).css('display') == 'block') {
					_select(Hint.$(oParent));
					break;
				}
				oParent = oParent.parentNode;
			}
		};
		
	Hint.$(document).ready(function() {
		_initialize();
	});
}