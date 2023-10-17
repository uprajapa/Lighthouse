let newString = "";
const pigLatin = function(args) {
  for (let arg of args) {
    newString = newString === "" ? "" : `${newString} `;
    newString += arg.slice(1) + arg[0] + "ay";
  }
  return newString;
};

console.log(pigLatin(process.argv.slice(2)));