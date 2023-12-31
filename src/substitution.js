// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let normalAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let cipher = [];


  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false;
    let dupCheck = new Set(alphabet);
    if (normalAlphabet.length !== [...dupCheck].length) return false;
    alphabet.split("");
    if (encode) {
      for (let i = 0; i < 25; i++) {
        cipher[normalAlphabet[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 25; i++) {
        cipher[alphabet[i]] = normalAlphabet[i];
      }
    }
    let result = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter === " ") return " ";
        return cipher[letter];
      });
    return result.join("");
  }
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
