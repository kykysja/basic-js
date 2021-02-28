const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let newArr = [];
	let resArr = [];

	if (Array.isArray(arr) === false) {
		throw Error('Error');
	}

	for (i = 0; i < arr.length; i++) {
		if (arr[i] !== '--double-prev' && arr[i] !== '--double-next' && arr[i] !== '--discard-prev' && arr[i] !== '--discard-next') {
			newArr.push(arr[i]);
		} else if (arr[i] == '--double-prev') {
			if (i !== 0) {
				if (arr[i - 2] !== '--discard-next') {
					newArr.push(arr[i - 1]);
				}
			}

		} else if (arr[i] == '--double-next') {
			if (i !== arr.length - 1) {
				newArr.push(arr[i + 1]);
			}

		} else if (arr[i] == '--discard-prev') {
			newArr.pop();

		} else if (arr[i] == '--discard-next') {
			if (i !== arr.length - 1) {
				newArr.push(arr[i + 2]);
				if (arr[i + 2] == '--double-prev' || arr[i + 2] == '--double-next' || arr[i + 2] == '--discard-prev' || arr[i + 2] == '--discard-next') {
					i++;
				} else {
					i += 2;
				}
			}
		}
	}

	for (i = 0; i < newArr.length; i++) {
		if (newArr[i] !== '--double-prev' && newArr[i] !== '--double-next' && newArr[i] !== '--discard-prev' && newArr[i] !== '--discard-next') {
			resArr.push(newArr[i]);
		}
	}
	return resArr;
}

