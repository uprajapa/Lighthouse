const transpose = function (matrix) {
  let output = [];
  const numberOfColumnsNeeded = matrix[0].length;
  const numberOfRowsNeeded = matrix.length;

  for(let i = 0; i < numberOfColumnsNeeded; i++) {
    output.push([]);    
  }

  for(let i = 0; i < numberOfRowsNeeded; i++) {           // i = counter - rows
    for(let j = 0; j < numberOfColumnsNeeded; j++){          // j = counter - col
      output[j][i] = matrix[i][j];
    }
  }

  return output;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));