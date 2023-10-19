const assertArraysEqual = function(actual, expected, bool) {
  if (eqArrays(actual, expected) === bool) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(actual, expected) {
  for (const char in actual) {
    if (actual[char] !== expected[char]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  let output = {};
  sentence = sentence.split(" ").join("");
  for (const char of sentence) {
    if (output[char]) {
      output[char]++;
    } else {
      output[char] = 1;
    }
  }
  console.log(output);
  return output;
};

console.log(assertArraysEqual(letterPositions("hello").e, [1], true));