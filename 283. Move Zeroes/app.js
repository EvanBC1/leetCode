function  moveZeroes (arr) {
  let zeroCounter = 0;
  let currentVal;
  let arrLength = arr.length;
  for ( let i = 0; i < arrLength; i++ ) {
    if (arr[0] === 0) {
      arr.shift();
      zeroCounter++;
    } else {
      currentVal = arr[0];
      arr.shift();
      arr.push(currentVal);
    }
  }
  for ( let i = 0; i < zeroCounter; i++ ) {
    arr.push(0);
  }
  return arr;
}

console.log('results', moveZeroes([0,1,0,3,12]));

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]