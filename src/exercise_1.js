/**
 * Write a function to check if a string is empty
 * @param {String} text
 * @returns {Boolean}
 */
function isStringEmpty(text) {
	if (text === undefined) {
		throw new Error("text must be defined");
	}
	return text.trim().length === 0;
}

/**
 * Write a function to truncate text
 * @param {String} text
 * @param {Number} numberOfCharacters
 * @returns {String}
 */
function truncateString(text, numberOfCharacters) {
	if (text === undefined || text.length === 0) {
		throw new Error("text must have at least one character");
	}
	if (numberOfCharacters === undefined) {
		throw new Error("Please specify number of characters to extract");
	}
	return text.slice(0, numberOfCharacters);
}

/**
 * Write a function to create social media post hash tag
 * @param {String} text
 * @returns {String}
 */
function createHashTag(text) {
	if (!text || text.trim().length < 3) {
		throw new Error("Text should have at least three characters");
	}
	return (
		"#" +
		text
			.trim()
			.split(" ")
			.map((word, index) =>
				index === 0
					? word.toLowerCase()
					: word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
			)
			.join("")
	);
}

/**
 * Write a function to format phone number as '+998 99 777 66 55'
 * @param {Number} phoneNumber
 * @returns {String}
 */
function formatPhoneNumber(phoneNumber) {
	const phoneStr = phoneNumber?.toString();
	if (!phoneStr || (phoneStr.length !== 9 && phoneStr.length !== 12)) {
		throw new Error("Phone number must be either 9 or 12 characters long");
	}
	return phoneStr.length === 9
		? `+998 ${phoneStr.slice(0, 2)} ${phoneStr.slice(2, 5)} ${phoneStr.slice(
				5,
				7
		  )} ${phoneStr.slice(7)}`
		: `+${phoneStr.slice(0, 3)} ${phoneStr.slice(3, 5)} ${phoneStr.slice(
				5,
				8
		  )} ${phoneStr.slice(8, 10)} ${phoneStr.slice(10)}`;
}

/**
 * Write a function that transforms text to different cases
 * @param {String} text
 * @param {'camel'|'kebab'|'snake'} caseName - 'camel', 'kebab', 'snake'
 * @returns {String}
 */
function changeTextCase(text, caseName) {
	if (!text) {
		throw new Error("Text must be defined");
	}
	const words = text.toLowerCase().split(/\s+/);
	switch (caseName) {
		case "camel":
			return words
				.map((word, index) =>
					index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
				)
				.join("");
		case "kebab":
			return words.join("-");
		case "snake":
			return words.join("_");
		default:
			throw new Error("Invalid case name");
	}
}

/**
 * Write a function to replace a given word in the text with the replacement word
 * @param {String} text - Some text
 * @param {String} word - A word that needs to be replaced
 * @param {String} replacement - A new word that will replace 'word' argument in the 'text'
 * @returns {String}
 */
function replaceWordInText(text, word, replacement) {
	if (!text || !word || !replacement) {
		throw new Error("All arguments must be provided");
	}
	const regex = new RegExp(word, "g");
	return text.replace(regex, replacement);
}

/**
 * Write a function to extract price in number format from the text
 * @param {String} text
 * @returns {Number|String}
 */
function extractPriceFromText(text) {
	const match = text.match(/\$([0-9]+(\.[0-9]+)?)/);
	if (!match) {
		return "No matching price was found";
	}
	return parseFloat(match[1]);
}

module.exports = {
	isStringEmpty,
	truncateString,
	createHashTag,
	formatPhoneNumber,
	changeTextCase,
	replaceWordInText,
	extractPriceFromText,
};
