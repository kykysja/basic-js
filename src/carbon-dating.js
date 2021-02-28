const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	let t;

	if (typeof sampleActivity != 'string' | sampleActivity > 15) {
		return false;
	} else {
		t = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
		if (typeof sampleActivity != 'number') {
			return false;
		} else {
			return t;
		}
	}
}
