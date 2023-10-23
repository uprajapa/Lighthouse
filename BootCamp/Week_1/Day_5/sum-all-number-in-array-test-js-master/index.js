function sumItems(array) {
  // Sum all the numbers in the array
  let output = 0;
  for (const arr of array) {
    if (Array.isArray(arr)) {
      output += sumItems(arr);
      // console.log(`if output: ${output}`);
    } else {
      output += arr;
      // console.log(`else output: ${output}`);
    }
  }
  return output;
  // for (const arr of array) {
  //   if (Array.isArray(arr)) {
  //     for (const ar of arr) {
  //       output += arr;
  //     }
  //   }
  //   output += arr;
  // }
  // return output;
}

module.exports = sumItems;