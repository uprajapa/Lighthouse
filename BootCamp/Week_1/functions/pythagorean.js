const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map((input) => {
  return Math.sqrt(input.x * input.x + input.y * input.y);
});

console.log(assertEqual(result[0], 5));
console.log(assertEqual(result[1], 13));
console.log(assertEqual(result[2], 17));