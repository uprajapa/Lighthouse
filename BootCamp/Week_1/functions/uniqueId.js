// Excercise 1
const makeLoadedDie = () => {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = -1;

  return function() {
    index++;
    return list[index];
  };
};

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

// Excercise 2

const countdownGenerator = function (x) {
  return function () {
    if (x > 0) {
      console.log(`T-minus ${x}...`);
      x--;
    } else if (x === 0) {
      console.log(`Blast Off!`);
      x--;
    } else if (x < 0) {
      console.log(`Rockets already gone, bub!`);
      x--;
    }
  };
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!