const findMissingNumber = function(arr) {
  let result = 0;
  let temp = arr[0];
  for(let ar of arr){    
    if(ar == temp || ar == temp+1){
      temp = ar;
    } else if(ar == temp+2){
      result = ar-1;
    }
  }
  return result;
};

console.log(
  findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]),
  findMissingNumber([100, 101, 102, 103, 105, 106, 107]),
  findMissingNumber([-3, -2, -1, 1, 2, 3])
);