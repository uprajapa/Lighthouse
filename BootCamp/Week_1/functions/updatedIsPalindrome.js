const isPalindrome = function(str) {
  const length = str.length;
  const halfIndex = Math.floor(length / 2);
  console.log(halfIndex);
  for (let i = 1; i <= halfIndex; i++) {
    if (str[i - 1] !== str[length - i]) {
      return false;
    }
    return true;
  }
};

console.log(
  isPalindrome('racecar'),
  isPalindrome('abba'),
  isPalindrome('abc'),
  isPalindrome('abracadabra'),
  isPalindrome('kayak'),
);