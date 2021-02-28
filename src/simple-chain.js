const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],
	getLength() {
		return this.arr.length;
	},
	addLink(value) {
		this.arr.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (position <= this.arr.length && position > 0) {
			this.arr.splice(position - 1, 1);
		} else {
			this.arr = [];
			throw Error('Error');
		}
		return this;
	},
	reverseChain() {
		this.arr.reverse();
		return this;
	},
	finishChain() {
		let chainStr = [];
		chainStr = this.arr.join('~~');
		this.arr = [];
		return chainStr;
	}
};

module.exports = chainMaker;
