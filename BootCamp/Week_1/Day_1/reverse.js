const reverse = function(args) {
  for (const arg of args) {
    let newString = "";
    for (const str of arg) {
      newString = str + newString;
    }
    console.log(newString);
  }
};

reverse(process.argv.slice(2));