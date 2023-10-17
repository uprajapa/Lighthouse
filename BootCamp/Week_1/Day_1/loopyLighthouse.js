const loopyLighthouse = function(range, multiples, words) {
  let result = "";
  for (let i = range[0]; i <= range[1]; i++) {
    let mod0 = i % multiples[0];
    let mod1 = i % multiples[1];
    if (mod0 === 0 && mod1 === 0) {
      result = words[0] + words[1];
    } else if (mod0 === 0) {
      result = words[0];
    } else if (mod1 === 0) {
      result = words[1];
    } else {
      result = i;
    }
    console.log(result);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);