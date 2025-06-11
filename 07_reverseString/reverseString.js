const reverseString = (string) => {
  const splitStr = string.split("");
  const reversedLetters = splitStr.reverse();
  return reversedLetters.join("");
};

// Do not edit below this line
module.exports = reverseString;
