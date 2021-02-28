const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	matrix = matrix.flat(Infinity);
	let total = 0;

	for (i = 0; i < matrix.length; i++) {
		if (matrix[i] == '^^') {
			total++;
		}
	}
	return total;
};
