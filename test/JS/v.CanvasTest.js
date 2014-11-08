var main = function() {
	var oCanvas = new v.Canvas(document.body, 500, 500);
	
	oCanvas.moveTo(100, 100);
	oCanvas.lineTo(100, 200);
	oCanvas.lineTo(200, 200);
	oCanvas.lineTo(100, 100);
	
	oCanvas.fill(120, 180, [255, 0, 0, 255]);
	
	if (oCanvas.getPixel(nX, nY) != aColor) {
		oCanvas.fill(?, ?, aColor)
	}
}