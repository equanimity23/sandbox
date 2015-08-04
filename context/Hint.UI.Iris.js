// --------------------------------
// |                              |
// --------------------------------
// |       |xxxxxxxxxxxx|         |
// |       |xxxxxxxxxxxx|         |
// --------------------------------
// |                              | 
// --------------------------------


Hint.UI.Iris = new function() {
	var _oThis   = this,
		_$Top    = null,
		_$Left   = null,
		_$Right  = null,
		_$Bottom = null,
		_oLast   = null;

	var _initialize = function() {
		_$Top    = Hint.$('<div class="hint hint_iris hint_iris_top"></div>');
		_$Left   = Hint.$('<div class="hint hint_iris hint_iris_left"></div>');
		_$Right  = Hint.$('<div class="hint hint_iris hint_iris_right"></div>');
		_$Bottom = Hint.$('<div class="hint hint_iris hint_iris_bottom"></div>');

		Hint.$('body').append(_$Top, _$Left, _$Right, _$Bottom);

		Hint.$(window).resize(function() {
			if (_oLast) {
				_oThis.show(_oLast.l, _oLast.t, _oLast.w, _oLast.h);
			}
		});
	};

	this.show = function(nL, nT, nW, nH) {
		_oLast = { l:nL, t:nT, w:nW, h:nH };
		var nDocW = Hint.$(document).width(),
			nDocH = Hint.$(document).height();

		_$Top.css({
			top     : '0px',
			left    : '0px',
			height  : nT + 'px',
			width   : nDocW + 'px',
			display : 'block'
		});
		_$Left.css({
			width   : nL + 'px',
			height  : nH + 'px',
			top     : nT + 'px',
			left    : '0px',
			display : 'block'
		});
		_$Right.css({
			width   : (nDocW - nL - nW) + 'px',
			height  : nH + 'px',
			top     : nT + 'px',
			left    : (nL + nW) + 'px',
			display : 'block'
		});
		_$Bottom.css({
			top     : (nT + nH) + 'px',
			left    : '0px',
			height  : (nDocH - nT - nH) + 'px',
			width   : nDocW + 'px',
			display : 'block'
		});
	}

	this.focus = function($Elements) {
		var nL = 100000000,
			nT = 100000000,
			nR = 0,
			nB = 0,
			oOffset,
			nW,
			nH,
			$E;

		$Elements.each(function() {
			$E      = Hint.$(this);
			oOffset = $E.offset();
			nW      = $E.outerWidth();
			nH      = $E.outerHeight();

			if (oOffset.left < nL) { nL = oOffset.left; }
			if (oOffset.top  < nT) { nT = oOffset.top;  }
			if (nL + nW      > nR) { nR = nL + nW; }
			if (nT + nH      > nB) { nB = nT + nH; }
		});

		this.show(nL, nT, nR - nL, nB - nT);
	}

	this.hide = function() {
		_oLast = null;
		_$Top.fadeOut(100);
		_$Left.fadeOut(100);
		_$Right.fadeOut(100);
		_$Bottom.fadeOut(100);
	}

	if (document.body) {
		_initialize();
	} else {
		Hint.$(document).ready(function() {
			_initialize();		
		});
	}
}