confirm('I am ready to play!');
var age = prompt('What\'s your age?');
if (age <=17) {
    console.log('You are allowed to play at your own risk');
} else {
    console.log('Great! Let\'s do it!');
}
console.log('You are at a Justin Bieber concert, and you hear this lyric \'Lace my shoes off, start racing.\'');
console.log('Suddenly, Bieber stops and says, \'Who wants to race me?\'');

var userAnswer;

var yesNo = function(sHint) {
	sHint = sHint || 'Do you want to race Bieber on stage? (Yes/No)';
	userAnswer = prompt(sHint);

	if (userAnswer === 'yes' || userAnswer === 'Yes' || userAnswer === 'YES' || userAnswer === 'Y') {
		console.log('You and Bieber start racing. It\'s neck and neck! You win by a shoelace!');
	} else if (userAnswer === 'no' || userAnswer === 'No' || userAnswer === 'NO' || userAnswer === 'N') {
		console.log('Oh no! Bieber shakes his head and sings \'I set a pace, so I can race without pacing.\'');
	} else {
		yesNo('You have to choose. Do you want to race Bieber on stage?');
	}
}

yesNo();
