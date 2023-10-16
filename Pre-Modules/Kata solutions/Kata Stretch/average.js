const average = function(arr) {
  let sum = 0; 
  for(let ar of arr){
    sum += ar;
  }
  return sum/arr.length;
};

console.log(
  average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  average([1000, -1000, 50, -999]),
  average([1, 2, 3])
);