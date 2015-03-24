var nGuessedNumber = 23,
	nResult;

var guessNumber = function(sHint) {
	sHint = sHint || 'Guess a number from 1 to ' + nGuessedNumber*2;
	nResult = prompt(sHint);
	if (nResult == nGuessedNumber) {
		alert('You are right! It is ' + nGuessedNumber + '!');
		return;
	} else if (nResult > nGuessedNumber) {
		sHint = 'Too low. Guess again';
		guessNumber(sHint);
	} else if (nResult == nGuessedNumber) {
		sHint = 'Too high. Guess again';
		guessNumber(sHint);
	}
}

guessNumber();