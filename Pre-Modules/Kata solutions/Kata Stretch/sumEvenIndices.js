const sumEvenIndices = function (arr) {
  let sum = 0;
  for(let ar in arr){
    if(ar % 2 === 0 || ar === 0){
      sum += arr[ar];
    }
  }
  return sum;
};

console.log(sumEvenIndices([1, 2, 3, 4, 5, 6, 7]), sumEvenIndices([3, 6, 9, 100, 1]));