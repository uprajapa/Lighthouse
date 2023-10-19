const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let output = {};
  for (const char of string) {
    if (output[char]) {
      output[char]++;
    } else {
      output[char] = 1;
    }
  }
  console.log(output);
};

countLetters('Lighthouse in the house');