const isPalindrome = function(str) {
  if(str == str.split('').reverse().join('')){
    return true;
  } else {
    return false;
  }
};

console.log(
  isPalindrome('racecar'),
  isPalindrome('abba'),
  isPalindrome('abc'),
  isPalindrome('abracadabra'),
  isPalindrome('kayak'),
);