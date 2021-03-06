const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr, totalDepth = 1) {
		let depth;
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				depth = this.calculateDepth(arr[i]) + 1;
			}
			if (totalDepth < depth) {
				totalDepth = depth;
			}
		}
		return totalDepth;
	}
};