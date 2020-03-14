function pascal (n) {
  let triangle = [[1]];

  console.log(triangle[0]);
  for (let i = 1; i < n + 1; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
    }
    triangle[i][i] = 1;
    console.log(triangle[i])
  }
  return triangle;
}

console.log(pascal(4));