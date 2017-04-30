function wisePerson(wiseType, whatToSay) {
	console.log('a wise ' + wiseType + ' once said: ' + whatToSay + '.');
}

wisePerson('goat', 'hello world');




function shouter(whatToShout) {
	console.log(whatToShout.toUpperCase() + '!!!');
}

shouter("Fee Figh Foe Fum");



function textNormalizer(text) {
	var newText = text.toLowerCase();
	return newText.trim() + ".";
}

textNormalizer(" let's GO SURFING NOW everyone is learning how ");