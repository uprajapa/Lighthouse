const sumOfMultiArray = function (arr) {
  let sum = 0;
  for(let ar of arr){
    for(let a of ar){
      sum += a;
    }
  }
  return sum;
}

console.log(tinkering([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));