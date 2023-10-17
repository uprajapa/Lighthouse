let sum = 0;
let args = process.argv;
args = args.slice(2);
for (let arg of args) {
  sum += parseInt(arg);
}
console.log(sum);