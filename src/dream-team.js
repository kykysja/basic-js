const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (Array.isArray(members)) {

		for (i = 0; i < members.length; i++) {

			if (typeof members[i] === 'string') {
				members[i] = members[i].replace(/\s/g, '').charAt(0).toUpperCase();
			} else {
				delete members[i];
			}
		}

		let teamName;
		teamName = members.sort().join('');
		return teamName;

	} else {
		return false;
	}
};
