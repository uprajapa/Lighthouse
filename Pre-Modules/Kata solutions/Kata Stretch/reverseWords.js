const reverseWords = function(str) {
  let newStr = str.split(" ");
  newStr.reverse();
  let result = newStr.toString();
  let final = result.replace(/,/g, " ");
  return final;
};

console.log(
  reverseWords('hello and welcome to Lighthouse Labs'),
  reverseWords('am I Yoda')
);