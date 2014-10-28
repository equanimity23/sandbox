var aSquares = [];
var nSquaresCount = 8;

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
	for (var n=0; n<nSquaresCount; n++) {
		oSquare
	}
}