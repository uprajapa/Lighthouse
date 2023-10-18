let originalWords = process.argv.slice(2);

const translateToPigLatin = function(word) {
  let pigLatinWords = "";
  for (let letter of word) {
    pigLatinWords = pigLatinWords === "" ? "" : `${pigLatinWords} `;
    pigLatinWords += letter.slice(1) + letter[0] + "ay";
  }
  return pigLatinWords;
};

console.log(translateToPigLatin(originalWords));
