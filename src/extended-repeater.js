const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	str = String(str);

	let addArr1 = [], addArr2 = [];
	let separator = '+', additionSeparator = '|';
	let repeatTimes = 1, additionRepeatTimes = 1;
	let additionStr, addition;

	if (options.addition !== undefined) {
		addition = String(options.addition);
	}

	additionSeparator = options.additionSeparator || additionSeparator;

	separator = options.separator || separator;

	additionRepeatTimes = options.additionRepeatTimes || additionRepeatTimes;

	repeatTimes = options.repeatTimes || repeatTimes;


	for (i = 1; i <= additionRepeatTimes; i++) {
		addArr1.push(addition);
	}

	additionStr = addArr1.join(additionSeparator);

	str += additionStr;

	for (i = 1; i <= repeatTimes; i++) {
		addArr2.push(str);
	}

	str = addArr2.join(separator);

	return str;
}
