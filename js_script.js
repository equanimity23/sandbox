var aSquares = [];
var nSquaresCount = 800;

function create() {
	var oSquare;

	for (var n=0; n<nSquaresCount; n++) {
		oSquare = new Square(n);
		aSquares.push(oSquare);
		oSquare.render(document.getElementById('wrapper'));
		oSquare.setRandomColor();
	}
}

function run() {
	for (var n=nSquaresCount-1; n>0; n--) {
		var oSquareNext     = aSquares[n];
		var oSquarePrevious = aSquares[n-1];
		sOldColor = oSquarePrevious.getColor();
		oSquareNext.setColor(sOldColor);
		
	}
	aSquares[0].setRandomColor();

	setTimeout('run()', 100);
}