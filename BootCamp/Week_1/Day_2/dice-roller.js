const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const diceRoller = function(args) {
  const numValueOfArg = Number(args[0]);
  let result = [];
  if (args.length > 1 || typeof numValueOfArg !== "number") {
    console.log("Input 1 number: ");
  } else {
    for (let i = 0; i < numValueOfArg; i++) {
      result.push(getRandomInt(1, 6));
    }
    result = result.join(", ");
    console.log(`Rolled ${numValueOfArg} dice: ${result}`);
  }
};

diceRoller(process.argv.slice(2));