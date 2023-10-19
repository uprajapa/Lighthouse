const raisinAlarm = function(cookie) {
  let output = '';
  for (const ingredient of cookie) {
    if (ingredient === "🍇") {
      output = "Raisin alert!";
      return output;
    } else {
      output = "All good!";
    }
  }
  return output;
};

const raisinArrayAlarm = function(cookies) {
  let arrayOutput = [];
  
  for (const cookie of cookies) {
    let isRaisin = false;
    for (const ingredient of cookie) {
      if (ingredient === "🍇") {
        isRaisin = true;
        arrayOutput.push("Raisin alert!");
        break;
      }
    }
    if (!isRaisin) {
      arrayOutput.push("All good!");
    }
  }
  return arrayOutput;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

console.log(raisinArrayAlarm([["🍫", "🍫", "🍇", "🍫"], ["🍫", "🍇", "🍫", "🍫", "🍇"], ["🍫", "🍫", "🍫"], ["🍫", "🍫", "🍫"]]));