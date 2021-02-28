const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(reverse) {
		this.reverse = reverse;
	}

	encrypt(message, key) {

		if (!message || !key) {
			throw new Error();
		}
		let letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

		message = message.toUpperCase().split('');
		key = key.toUpperCase().split('');

		for (i = 0; key.length < message.length; i++) {
			key.push(...key);
		}
		let indexArr = [];
		for (i = 0; i < message.length; i++) {
			if (message[i].toUpperCase() != message[i].toLowerCase()) /* if it is a letter */ {

				indexArr.push((letter.indexOf(message[i]) + (letter.indexOf(key[i]))));
			} else {
				indexArr.push(message[i]);
				key.splice(i, 0, key[i]);
			}
		}
		let encrypted = [];
		for (i = 0; i < indexArr.length; i++) {

			if (typeof (indexArr[i]) === 'number' && indexArr[i] > 25) {
				encrypted.push(letter[indexArr[i] - 26]);

			} else if (typeof (indexArr[i]) === 'number') {
				encrypted.push(letter[indexArr[i]]);
			} else {
				encrypted.push(indexArr[i]);
			}
		}

		if (this.reverse === false) {
			return encrypted.reverse().join('');
		} else {
			return encrypted.join('');
		}
	}

	decrypt(encrypted, key) {

		if (!encrypted || !key) {
			throw new Error();
		}
		let letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

		encrypted = encrypted.toUpperCase().split('');
		key = key.toUpperCase().split('');

		for (i = 0; key.length < encrypted.length; i++) {
			key.push(...key);
		}
		let indexArr = [];
		for (i = 0; i < encrypted.length; i++) {
			if (encrypted[i].toUpperCase() != encrypted[i].toLowerCase()) /* if it is a letter */ {

				indexArr.push((letter.indexOf(encrypted[i]) - (letter.indexOf(key[i]))));
			} else {
				indexArr.push(encrypted[i]);
				key.splice(i, 0, key[i]);
			}
		}
		let message = [];
		for (i = 0; i < indexArr.length; i++) {

			if (typeof (indexArr[i]) === 'number' && indexArr[i] < 0) {
				message.push(letter[indexArr[i] + 26]);

			} else if (typeof (indexArr[i]) === 'number') {
				message.push(letter[indexArr[i]]);
			} else {
				message.push(indexArr[i]);
			}
		}

		if (this.reverse === false) {
			return message.reverse().join('');
		} else {
			return message.join('');
		}
	}
}

module.exports = VigenereCipheringMachine;