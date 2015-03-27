var aChoices = ['rock', 'paper', 'scissors'];

var askUser = function() {
    var sResult = prompt('Do you choose rock, paper or scissors?');
	if (aChoices.indexOf(sResult) <= -1) {
		if (confirm('Your answer is incorrect. Choose again?')) {
			sResult = askUser();
		} else {
			sResult = null;
		}
	}
	return sResult;
}

var askComputer = function() {
	var nChoice = Math.random();
	var sChoice;

	if (nChoice < 0.34) {
		sChoice = aChoices[0];
	} else if (nChoice <= 0.67) {
		sChoice = aChoices[1];
	} else {
		sChoice = aChoices[2];
	} 
	console.log('Computer: ' + sChoice);
	return sChoice;
}


var compare = function() {
	var sUserChoice     = askUser(),
		sComputerChoice = askComputer(),
		sGameResult     = '';
		
	if (sUserChoice) {
		if (sUserChoice === sComputerChoice) {
			alert('This is a tie, choose again');
			sGameResult = compare();
		} else {
			if (sUserChoice == 'rock') {
				if (sComputerChoice == 'scissors') {
					sGameResult = sUserChoice;
					console.log('sGameResult: ' + sGameResult + ' wins');
				} else if (sComputerChoice == 'paper') {
					sGameResult = sComputerChoice;
					console.log('sGameResult: ' + sGameResult + ' wins');
				}
			} else if (sUserChoice == 'scissors') {
				if (sComputerChoice == 'rock') {
					sGameResult = sComputerChoice;
					console.log('sGameResult: ' + sGameResult + ' wins');
				} else if (sComputerChoice == 'paper') {
					sGameResult = sUserChoice;
					console.log('sGameResult: ' + sGameResult + ' wins');
				}
			} else if (sUserChoice === 'paper') {
				if (sComputerChoice == 'rock') {
					sGameResult = sUserChoice;
					console.log('sGameResult: ' + sGameResult + ' wins');
				} else if (sComputerChoice == 'scissors') {
					sGameResult = sComputerChoice;
					console.log('sGameResult: ' + sGameResult + ' wins');
				}
			}
		}
		return sGameResult;
}
console.log(compare() + ' wins');