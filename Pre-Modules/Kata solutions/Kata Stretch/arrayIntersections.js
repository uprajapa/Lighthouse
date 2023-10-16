const arrayIntersections = function(arr1, arr2) {
  let result = [];
  for(let arr of arr1){
    for(let ar of arr2){
      if(arr === ar){
        result.push(arr);
      }
    }
  }
  return result;
};

console.log(
  arrayIntersections([-2, -1, 1, 2, 3], [1, 2, 3, 4, 5, 6]),
  arrayIntersections(['dog', 'cat', 'fish'], ['centipede', 'fish', 'bird']),
  arrayIntersections([1, 'hello', true], [2, 'goodbye', true])
);