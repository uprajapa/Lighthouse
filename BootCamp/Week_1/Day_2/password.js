const obfuscate = function(args) {
  let result = "";
  result = args[0]
    .replaceAll("a", 4)
    .replaceAll("e", 3)
    .replaceAll("o", 0)
    .replaceAll("l", 1);
  return result;
};

console.log(obfuscate(process.argv.slice(2)));