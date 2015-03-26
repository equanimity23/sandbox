var sText = 'Vlada sadasdVasdk sdj Vaksd f AJDbVAKSAADcvasdasd Vladaasd xSHBD skjdfhsd skdhfsdVlada sdjfhs Vladandjfs Vlada';
var sName = 'Vlada';
/*var aMatches = [];

for (var i=0; i<sText.length; i++) {
    if (sText[i] === 'V') {
        for (var j=i; j<(sName.length + i); j++) {
            aMatches.push(sText[j]);
        }
    }
};

if (aMatches.length < sName.length) {
    console.log('Your name was not found');
} else {
    console.log(aMatches);
}
*/

var sRegex   = new RegExp(sName, 'g');
var aMatches = sText.match(sRegex);
var nCount   = 0;

for (var n=0; n<aMatches.length; n++) {
	console.log(aMatches[n]);
	nCount++;
}

console.log(sName + ' has been found in text ' + nCount + ' times');