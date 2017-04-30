//Square Area
function computeArea(width, height) {
	var result = width * height;
	return result;
}

computeArea(3,5);


//Temperature conversion
function celsToFahr(temperature) {
	var result = temperature * (9/5) + 32;
	return result;
}

celsToFahr(0);

function fahrToCels(temperature) {
	var result = (temperature - 32) * 5/9;
	return result;
}

fahrToCels(32);


//Is divisible
function isDivisible(divisor, divisee) {
	if (divisor%divisee === 0) {
		return true
	}
	else {
		return false
	}
}