const urlEncode = function(text) {
  // Put your solution here
  let result = " ";
  for(let char of text){
    if(char == ' '){
      result += '%20';
    } else {
      result += char;
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));